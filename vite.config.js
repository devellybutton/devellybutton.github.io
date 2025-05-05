import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  optimizeDeps: {
    include: ["@supabase/supabase-js"],
  },
});
