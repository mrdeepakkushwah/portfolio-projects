import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";
import pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    pages(),
    sitemap({ hostname: "https://deepakkhiraofficial.netlify.app" }),
  ],
  base: "/", // Keep this '/' for Netlify
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    target: "es2015", // Improves compatibility and minifies JS
    cssCodeSplit: true, // Ensures styles are split per-page
    sourcemap: false, // Remove source maps for smaller build size
    minify: "esbuild", // Fast and efficient minifier
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large libraries like react
          react: ["react", "react-dom"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // Optional: clean imports
    },
  },
});
