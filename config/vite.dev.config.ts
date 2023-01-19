import commonConfig from "./vite.common.config";
import { defineConfig, mergeConfig } from "vite";

/** @name 开发环境配置 */
const devConfig = defineConfig({
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});

export default mergeConfig(commonConfig, devConfig);
