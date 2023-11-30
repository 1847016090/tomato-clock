# tuari-vite-template

## 记录问题
1. 使用`pnpm tauri dev`启动项目时，`rust`装依赖报以下错误:
```
tauri use of unstable library feature 'once_cell'
```
这个问题主要是当前的rust不是最新版本,我们只需要执行`rustup update`命令重新更新即可
