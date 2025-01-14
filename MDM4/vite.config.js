// filepath: /Users/flint/Library/Mobile Documents/com~apple~CloudDocs/Developer Cloud/MDM4/MDM4/vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: '/MDM4/', // Set the base path to your repository name
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});