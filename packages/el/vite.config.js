import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "52cssEl",
      fileName: (format) => `52css-el.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", 'element-plus'], // 排除 vue，不打包
      output: {
        globals: {
          vue: "Vue",
          'element-plus': "ElementPlus",
        },
      },
    },
  },
});
