import { defineConfig } from "vite";

export default defineConfig({
  base: "/devellybutton.github.io/",
  build: {
    outDir: "..",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
