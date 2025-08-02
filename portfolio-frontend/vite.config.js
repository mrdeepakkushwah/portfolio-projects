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
    sitemap({
      hostname: "https://deepakkhiraofficial.netlify.app",
    }),

    // Inject SEO + JSON-LD structured data
    createHtmlPlugin({
      inject: {
        data: {
          title: "Deepak Khira Portfolio",
          description: "Deepak Kushwah – Full Stack MERN Developer Portfolio",
        },
        tags: [
          // Preconnects
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
              crossorigin: "",
            },
            injectTo: "head",
          },

          // Google Fonts (media swap)
          {
            tag: "link",
            attrs: {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600&display=swap",
              media: "print",
              onload: "this.media='all'",
            },
            injectTo: "head",
          },

          // Image preload (LCP)
          {
            tag: "link",
            attrs: {
              rel: "preload",
              as: "image",
              href: "/deepak.jpg",
              fetchpriority: "high",
              imagesrcset: "/deepak.jpg 1x, /deepak@2x.jpg 2x",
              imagesizes: "(max-inline-size: 768px) 100vw, 371px",
            },
            injectTo: "head",
          },

          // ✅ JSON-LD Structured Data
          {
            tag: "script",
            attrs: {
              type: "application/ld+json",
            },
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Deepak Kushwah",
              jobTitle: "Full Stack Developer",
              url: "https://deepakkhiraofficial.netlify.app",
              image: "https://deepakkhiraofficial.netlify.app/deepak.jpg",
              sameAs: [
                "https://github.com/deepakkhiraofficial",
                "https://www.linkedin.com/in/deepakkhiraofficial/",
                "https://twitter.com/deepakkhira",
                "https://www.instagram.com/deepakkhiraofficial/",
                "https://www.facebook.com/deepakkhiraofficial",
              ],
              description:
                "Full Stack Developer specializing in MERN stack, JavaScript, and building scalable web applications.",
            }),
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
    manifest: true,
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
