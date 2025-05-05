import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const config = {
    publicDir: "public",
  };

  if (command === "build") {
    config.base = "/devellybutton.github.io/";
  } else {
    config.base = "/";
  }

  return config;
});
