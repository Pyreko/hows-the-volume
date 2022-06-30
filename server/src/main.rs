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
use tracing::info;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();
    dotenv().ok().unwrap();

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

    let addr = "0.0.0.0:8080".parse().unwrap();

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
    let mut conn = pool.acquire().await.unwrap();

    let count = sqlx::query!("SELECT count FROM counts WHERE name = 'volume'")
        .fetch_one(&mut conn)
        .await
        .unwrap()
        .count as u64;

    Json(Count::new(count))
}

/// Returns the selected sound file if it exists.
async fn sound(id_result: Result<Path<u32>, PathRejection>) -> Response {
    if let Ok(Path(id)) = id_result {
        const PREFIX: &str = "volume_";
        const SUFFIX: &str = ".mp3";

        let uri = format!("/{}{:0>2}{}", PREFIX, id, SUFFIX);
        let req = Request::builder().uri(uri).body(Body::empty()).unwrap();

        ServeDir::new("assets/")
            .oneshot(req)
            .await
            .unwrap()
            .into_response()
    } else {
        StatusCode::NOT_FOUND.into_response()
    }
}

/// Increments the count.
async fn increment(Extension(pool): Extension<PoolExt>) -> Json<Count> {
    let mut conn = pool.acquire().await.unwrap();

    let count =
        sqlx::query!("UPDATE counts SET count = count + 1 WHERE name = 'volume' RETURNING count")
            .fetch_one(&mut conn)
            .await
            .unwrap()
            .count
            .unwrap_or(0) as u64;

    Json(Count::new(count))
}
