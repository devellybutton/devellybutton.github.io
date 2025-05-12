import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist", // 빌드된 파일이 저장될 디렉토리
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  publicDir: "public", // 정적 파일
});
