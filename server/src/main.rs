use std::{env, sync::Arc};

use axum::{
    body::Body,
    extract::{rejection::PathRejection, Path},
    http::{Method, Request, StatusCode},
    response::{IntoResponse, Response},
    routing::{get, post},
    Extension, Json, Router,
};
use dotenv::dotenv;
use serde::Serialize;
use sqlx::{Pool, Sqlite, SqlitePool};
use tower::util::ServiceExt;
use tower_http::{
    cors::{self, CorsLayer},
    services::ServeDir,
};
use tracing::{info, warn};
use tracing_subscriber::filter::EnvFilter;

#[tokio::main]
async fn main() {
    dotenv().ok().unwrap();

    let file_appender = tracing_appender::rolling::daily("./", "volume.log");
    let (non_blocking, _guard) = tracing_appender::non_blocking(file_appender);

    tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::from_default_env())
        .with_writer(non_blocking)
        .with_ansi(false)
        .init();

    info!("Starting up...");
    let pool = SqlitePool::connect(&env::var("DATABASE_URL").unwrap())
        .await
        .unwrap();

    let pool_rc = Arc::new(pool);

    let cors = CorsLayer::new()
        .allow_methods(vec![Method::GET, Method::POST])
        .allow_origin(cors::Any); // FIXME: For now.

    let app = Router::new()
        .route("/sound/:id", get(sound))
        .route("/count", get(count))
        .route("/increment", post(increment))
        .layer(cors)
        .layer(Extension(pool_rc.clone()));

    let addr = "127.0.0.1:8080".parse().unwrap();

    info!("Listening on {}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .with_graceful_shutdown(async {
            tokio::signal::ctrl_c().await.unwrap();
            info!("Shutdown signal received.");
        })
        .await
        .unwrap();

    info!("Closing SQLite connection.");
    pool_rc.close().await;

    info!("Shutting down server.");
}

type PoolExt = Arc<Pool<Sqlite>>;

#[derive(Serialize)]
struct Count {
    count: u64,
}

impl Count {
    fn new(count: u64) -> Self {
        Self { count }
    }
}

/// Returns the current global count, stored in the DB.
async fn count(Extension(pool): Extension<PoolExt>) -> Json<Count> {
    match pool.acquire().await {
        Ok(mut conn) => {
            match sqlx::query!("SELECT count FROM counts WHERE name = 'volume'")
                .fetch_one(&mut conn)
                .await
            {
                Ok(query) => Json(Count::new(query.count as u64)),
                Err(err) => {
                    warn!("SQLite query for count failed - err: {}", err);
                    Json(Count::new(0))
                }
            }
        }
        Err(err) => {
            warn!("Failed to get pool connection to SQLite DB - err: {}", err);
            Json(Count::new(0))
        }
    }
}

/// Returns the selected sound file if it exists.
async fn sound(id_result: Result<Path<u32>, PathRejection>) -> Response {
    if let Ok(Path(id)) = id_result {
        const PREFIX: &str = "volume_";
        const SUFFIX: &str = ".mp3";

        let uri = format!("/{}{:0>2}{}", PREFIX, id, SUFFIX);
        match Request::builder().uri(&uri).body(Body::empty()) {
            Ok(req) => match ServeDir::new("assets/").oneshot(req).await {
                Ok(resp) => return resp.into_response(),
                Err(err) => {
                    warn!("Failed to get a response for file {} - err: {}", uri, err);
                }
            },
            Err(err) => {
                warn!("Failed to build a request for file {} - err: {}", uri, err);
            }
        }
    }

    StatusCode::NOT_FOUND.into_response()
}

/// Increments the count.
async fn increment(Extension(pool): Extension<PoolExt>) {
    let mut conn = pool.acquire().await.unwrap();

    match sqlx::query!("UPDATE counts SET count = count + 1 WHERE name = 'volume'")
        .execute(&mut conn)
        .await
    {
        Ok(_) => {}
        Err(err) => {
            warn!("Failed to increment in DB - err: {}", err);
        }
    }
}
