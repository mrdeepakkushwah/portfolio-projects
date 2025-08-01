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
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
  base: "/", // change this for GitHub Pages (e.g., '/repo-name/')
});
