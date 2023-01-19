import commonConfig from "./vite.common.config";
import { defineConfig, mergeConfig } from "vite";

/** @name 生产环境配置 */
const prodConfig = defineConfig({
  mode: "production",
});

export default mergeConfig(commonConfig, prodConfig);
