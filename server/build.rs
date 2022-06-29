use std::{env, fs::File, path::Path};

use dotenv::dotenv;

fn main() {
    dotenv().ok().unwrap();
    let db_url = env::var("DATABASE_URL").unwrap();
    let db_file = db_url.strip_prefix("sqlite://").unwrap();

    if !Path::new(db_file).exists() {
        File::create(db_file).unwrap();
    }
}
