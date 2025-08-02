import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";
import pages from "vite-plugin-pages";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    pages(),
    sitemap({ hostname: "https://deepakkhiraofficial.netlify.app" }),
    createHtmlPlugin({
      inject: {
        data: {
          title: "Deepak Khira Portfolio",
        },
        tags: [
          {
            tag: "link",
            attrs: {
              rel: "preconnect",
              href: "https://fonts.googleapis.com",
            },
            injectTo: "head",
          },
          {
            tag: "link",
            attrs: {
              rel: "preconnect",
              href: "https://fonts.gstatic.com",
              crossorigin: true,
            },
            injectTo: "head",
          },
          {
            tag: "link",
            attrs: {
              rel: "preload",
              as: "image",
              href: "/deepak.jpg",
              fetchpriority: "high",
            },
            injectTo: "head",
          },
        ],
      },
    }),
  ],
  base: "/",
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    target: "es2015",
    cssCodeSplit: true,
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
