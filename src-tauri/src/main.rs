// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod lib;
pub use crate::lib::front::generate_rand_num;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![generate_rand_num])
        .run(tauri::generate_context!())
        .expect("error while running tauri application")
}
