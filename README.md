# tuari-vite-template

## 创建当前项目流程
1. 初始化一个项目，克隆一个vite开发仓库
```
git clone git@github.com:1847016090/vite-template.git
```
在git新建立一个模版仓库，并且将`origin`指向该仓库
```
// 修改仓库源
git remote set-url origin git@github.com:1847016090/tauri-vite-template.git

git remote rm origin
git remote add origin git@github.com:1847016090/tauri-vite-template.git

// 使用git fetch 同步数据
git fetch --all
git pull
```

2. 接入`tauri`模块
- 安装`tauri`的cli工具
```
pnpm add -D @tauri-apps/cli
```
执行命令，然后根据自己的需求选择执行之后的项
```
pnpm tauri init
```
执行完成之后，会生成一个`src-tauri`的目录

3. 在`src-tauri/src/main.rs`中编写一个产生随机数的方法`generate_rand_num`,该方法会调用rust的一个库`rand`,我们还需要安装`rand`,执行`cargo add rand`即可

```rust
use rand::Rng;
#[tauri::command]
pub fn generate_rand_num() -> i8 {
        let secret_num: i8 = rand::thread_rng().gen_range(1..101);
        println!("当前的随机数是={}", secret_num);
        secret_num
    }
```

4. 前端界面和rust通信
`src/main.rs`中，我们使用`invoke_handler`函数将我们的函数注入进去
```rust
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![generate_rand_num])
        .run(tauri::generate_context!())
        .expect("error while running tauri application")
}
```
在前端界面中调用，我们需要先安装`@tauri-apps/api`
```
pnpm add @tauri-apps/api
```
安装成功后，我们使用`invoke`方法去调用我们在`main.rs`里面注入的`generate_rand_num`
方法
```
import { invoke } from "@tauri-apps/api";

// 调用注入的方法就能拿到该函数生成的值了
invoke('generate_rand_num').then((res) => { console.log(res) })
```
拿到值之后，我们可以将值渲染到我们的前端界面

## 记录问题
1. 使用`pnpm tauri dev`启动项目时，`rust`装依赖报以下错误:
```
tauri use of unstable library feature 'once_cell'
```
这个问题主要是当前的rust不是最新版本,我们只需要执行`rustup update`命令重新更新即可
