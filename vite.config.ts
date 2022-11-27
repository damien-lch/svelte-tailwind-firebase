import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $: path.resolve(__dirname, "./src/lib"),
      $views: path.resolve(__dirname, "./src/lib/views"),
      $plugins: path.resolve(__dirname, "./src/lib/plugins"),
      $stores: path.resolve(__dirname, "./src/lib/stores"),
      $components: path.resolve(__dirname, "./src/lib/components"),
    },
  },
});
