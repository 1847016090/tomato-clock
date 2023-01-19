import { defineConfig } from "vite";
import useReact from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

// https://vitejs.dev/config/
export default defineConfig({
  // !配置环境变量
  // .env环境默认加载路径
  envDir: "./",
  // .env中配置的环境变量开头必须以envPrefix开头才会暴露到import.meta.env里面
  envPrefix: "ROKID",
  //! 配置插件
  plugins: [useReact()],
  //! 配置CSS模块
  css: {
    modules: {
      // 作用于当前页面,默认local
      scopeBehaviour: "local",
      // https://github.com/madyankin/postcss-modules
      // dashes-引入的模块里面会包含原始的类名以及转化后的类名，dashesOnly-引入的模块只会有转化后的破折号的形式的类名
      localsConvention: "dashes",
      // 自定义类名的名字，防止类名污染
      generateScopedName: "[local]____[hash:base64:8]",
    },
    postcss: {
      // 配置处理类名前缀，兼容不同内核的浏览器
      plugins: [autoprefixer, cssnano],
    },
  },
});
