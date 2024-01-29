use std::{sync::Arc, time::Duration};

use anyhow::Result;
use sqlx::{Pool, Sqlite};
use tokio::{
    sync::{mpsc::UnboundedSender, Mutex},
    task::JoinHandle,
};
use tracing::{error, info, warn};

#[derive(Clone)]
pub(crate) struct Value {
    pub(crate) count: u64,
    pub(crate) dirty: bool,
}

/// Represents the current count and a connection to the SQLite pool.
pub type State = Arc<Mutex<Value>>;

/// Returns the current global count, from the DB. This is the true source of truth!
async fn get_db_count(pool: &Pool<Sqlite>) -> Result<u64> {
    let mut conn = pool.acquire().await?;
    let query = sqlx::query!("SELECT count FROM counts WHERE name = 'volume'")
        .fetch_one(&mut conn)
        .await?;

    Ok(query.count as u64)
}

/// Try to update the DB count. If the query was successful, it returns whether any rows were changed.
async fn update_db_count(pool: Arc<Pool<Sqlite>>, new_count: u64) -> Result<bool> {
    let mut conn = pool.acquire().await.unwrap();

    // Note that u64 values aren't supported by SQLX for whatever reason,
    // so we instead use an i64 internally.
    let new_count = new_count as i64;

    // Update to either the max of the current value stored and the new value.
    match sqlx::query!(
        "UPDATE counts SET count = MAX(count, ?) WHERE name = 'volume'",
        new_count
    )
    .execute(&mut conn)
    .await
    {
        Ok(result) => Ok(result.rows_affected() > 0),
        Err(err) => {
            error!("Failed to increment in DB - err: {err}");
            Err(err.into())
        }
    }
}

#[inline]
async fn sync_counts(pool: &Arc<Pool<Sqlite>>, state: &State) {
    let mut value = state.lock().await;
    if value.dirty {
        // Get values out and immediately clear dirty flag, then
        // release the mutex.

        let new_val = value.count;
        value.dirty = false;
        drop(value); // XXX: YOU MUST CALL THIS, OR YOU WILL DEADLOCK THE INCREMENT JOB!

        if let Ok(did_update) = update_db_count(pool.clone(), new_val).await {
            if !did_update {
                // No update - we might have to sync the state to be correct if the state is currently
                // showing a LOWER value than the DB.
                if let Ok(current_db_value) = get_db_count(pool).await {
                    let mut value = state.lock().await;
                    if value.count < current_db_value {
                        // This should basically never happen but just in case, we want the DB to be
                        // "the source of truth" for most cases.
                        warn!("The state's value was lower than what was in the DB - resyncing state.");
                        value.count = current_db_value;
                    }
                }
            }
        }
    }
}

/// Initializes the state, along with the update task and shutdown sender.
pub(crate) async fn init_state(
    pool: Arc<Pool<Sqlite>>,
) -> Result<(State, JoinHandle<()>, UnboundedSender<()>)> {
    let state = {
        let count = match get_db_count(&pool).await {
            Ok(val) => val,
            Err(err) => {
                warn!("Error while trying to get the currently stored DB value of count, defaulting to 0: {err}");
                0
            }
        };

        info!("Count on startup: {count}");

        Arc::new(Mutex::new(Value {
            count,
            dirty: false,
        }))
    };

    let (tx, rx) = tokio::sync::mpsc::unbounded_channel();

    let sync_task = {
        let state = state.clone();
        let pool = pool.clone();

        tokio::task::spawn(async move {
            let mut rx = rx;
            let mut interval = tokio::time::interval(Duration::from_secs(10));

            loop {
                tokio::select! {
                    _ = rx.recv() => {
                        // Sync one last time, then stop.
                        warn!("Syncing update task before shutting down...");
                        sync_counts(&pool, &state).await;
                        warn!("Synced. Update task shutting down.");

                        break;
                    }
                    _ = interval.tick() => {
                        sync_counts(&pool, &state).await;
                    }
                }
            }
        })
    };

    Ok((state, sync_task, tx))
}
