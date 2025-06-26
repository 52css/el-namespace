import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "El",
      fileName: (format) => `el.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", 'element-plus'], // 排除 vue，不打包
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
