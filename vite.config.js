import path from "path";
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    emptyOutDir: true,
    assetsDir: "static-assets",
    rollupOptions: {
      output: {
        entryFileNames: `static-assets/[name].js`,
        chunkFileNames: `static-assets/[name].js`,
        assetFileNames: `static-assets/[name].[ext]`
      }
    }
  },
  server: {
    port: 5174,
    strictPort: true,
    hmr: {
      port: 5174,
    },
  },
})
