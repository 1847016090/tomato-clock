import commonConfig from "./vite.common.config";
import { defineConfig, mergeConfig } from "vite";

/** @name 生产环境配置 */
const prodConfig = defineConfig({});

export default mergeConfig(commonConfig, prodConfig);
