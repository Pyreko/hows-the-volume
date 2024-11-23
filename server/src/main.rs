mod state;

use std::{env, fs, sync::Arc, time::Duration};

use anyhow::Result;
use axum::{
    body::Body,
    extract::{rejection::PathRejection, Path},
    handler::Handler,
    http::{HeaderValue, Method, Request, StatusCode},
    response::{IntoResponse, Response},
    routing::{get, post},
    Extension, Json, Router,
};
use dotenv::dotenv;
use serde::Serialize;

use sqlx::{Pool, Sqlite, SqlitePool};
use state::State;
use tokio::time::timeout;
use tower::util::ServiceExt;
use tower_http::{cors::CorsLayer, services::ServeDir};
use tracing::{error, info};
use tracing_subscriber::filter::EnvFilter;

use crate::state::init_state;

async fn not_found_handler() -> impl IntoResponse {
    not_found()
}

fn not_found() -> StatusCode {
    StatusCode::NOT_FOUND
}

/// A JSON message containing a count.
#[derive(Serialize)]
struct Count {
    count: u64,
}

impl Count {
    fn new(count: u64) -> Self {
        Self { count }
    }
}

async fn count(Extension(state): Extension<State>) -> Json<Count> {
    let val = state.lock().await;
    Json(Count::new(val.count))
}

/// Returns the selected sound file if it exists.
async fn sound(id_result: Result<Path<u32>, PathRejection>) -> Response {
    if let Ok(Path(id)) = id_result {
        const PREFIX: &str = "volume_";
        const SUFFIX: &str = ".mp3";

        let uri = format!("/{PREFIX}{id:0>2}{SUFFIX}");
        match Request::builder().uri(&uri).body(Body::empty()) {
            Ok(req) => match ServeDir::new("assets/").oneshot(req).await {
                Ok(resp) => {
                    if resp.status() == StatusCode::OK {
                        return resp.into_response();
                    }
                }
                Err(err) => {
                    error!("Failed to get a response for file {uri} - err: {err}");
                }
            },
            Err(err) => {
                error!("Failed to build a request for file {uri} - err: {err}");
            }
        }
    }

    not_found().into_response()
}

/// Increments the count.
async fn increment(Extension(state): Extension<State>) {
    let mut val = state.lock().await;
    val.count += 1;
    val.dirty = true;
}

/// Open the SQLite pool.
async fn open_pool() -> Result<Arc<Pool<Sqlite>>> {
    {
        let url = env::var("DATABASE_URL")?;
        let pool = SqlitePool::connect(&url).await?;

        Ok(Arc::new(pool))
    }
}

/// Returns the number of audio tracks available.
async fn num_audio_tracks() -> Json<Count> {
    let num_tracks = match fs::read_dir("assets/") {
        Ok(rd) => rd
            .filter(|de| match de {
                Ok(de) => match de.path().extension() {
                    Some(ext) => ext == "mp3",
                    None => false,
                },
                Err(_) => false,
            })
            .count() as u64,
        Err(_) => 0,
    };

    Json(Count::new(num_tracks))
}

#[tokio::main]
async fn main() -> Result<()> {
    dotenv().ok().unwrap();

    let file_appender = tracing_appender::rolling::daily("./", "volume.log");
    let (non_blocking, _guard) = tracing_appender::non_blocking(file_appender);

    tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::from_default_env())
        .with_writer(non_blocking)
        .with_ansi(false)
        .init();

    info!("Starting up HTV...");

    let pool = open_pool().await?;
    let (state, sync_task, shutdown) = init_state(pool.clone()).await?;

    let origins = [
        "http://localhost:3000".parse::<HeaderValue>()?,
        "https://howsthevolu.me".parse::<HeaderValue>()?,
    ];

    let cors = CorsLayer::new()
        .allow_methods(vec![Method::GET, Method::POST])
        .allow_origin(origins);

    let app = Router::new()
        .route("/sound/:id", get(sound))
        .route("/count", get(count))
        .route("/increment", post(increment))
        .route("/num-files", get(num_audio_tracks))
        .layer(cors)
        .layer(Extension(state))
        .fallback(not_found_handler.into_service());

    let addr = "127.0.0.1:8080".parse()?;

    info!("Listening on {addr}");

    if std::path::Path::new("assets/").exists() {
        let num_files = fs::read_dir("assets/").unwrap().count();
        info!("Found {num_files} files in assets!");
    } else {
        error!("Warning - no asset/ folder found! There should be one located near the binary!");
    }

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .with_graceful_shutdown(async {
            tokio::signal::ctrl_c().await.unwrap();
            info!("Shutdown signal received.");
        })
        .await?;

    info!("Stopping sync task.");
    let _ = shutdown.send(());
    let _ = timeout(Duration::from_secs(15), sync_task).await;

    info!("Closing SQLite connection.");
    pool.close().await;

    info!("Cleanup complete, shutting down HTV server.");

    Ok(())
}
