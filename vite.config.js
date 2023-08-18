import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), vue()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "MikeUi",
      fileName: (format) => `jje-ui.${format}.js`,
      formats: ["es", "cjs", "iife"],
    },
    rollupOptions: {
      // 排除 build 那些不想被打包的套件或框架
      external: ["vue"],
      output: {
        // 在 UMD 模式下，这是全域變數的名字
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
