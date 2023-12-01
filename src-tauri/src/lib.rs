pub mod front {
    use rand::Rng;
    #[tauri::command]
    pub fn generate_rand_num() -> i8 {
        let secret_num: i8 = rand::thread_rng().gen_range(1..101);
        println!("当前的随机数是={}", secret_num);
        secret_num
    }
}
