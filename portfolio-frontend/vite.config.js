import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://deepakkhiraofficial.netlify.app",
    }),

    createHtmlPlugin({
      inject: {
        data: {
          title: "Deepak Kushwah Portfolio",
          description: "Deepak Kushwah – Full Stack MERN Developer Portfolio",
        },
        tags: [
          {
            tag: "meta",
            attrs: {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            },
            injectTo: "head",
          },
          {
            tag: "meta",
            attrs: { name: "robots", content: "index, follow" },
            injectTo: "head",
          },
          {
            tag: "link",
            attrs: { rel: "icon", href: "/favicon.ico" },
            injectTo: "head",
          },
          {
            tag: "link",
            attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" },
            injectTo: "head",
          },
          {
            tag: "link",
            attrs: {
              rel: "preconnect",
              href: "https://fonts.gstatic.com",
              crossorigin: "anonymous",
            },
            injectTo: "head",
          },
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
          {
            tag: "link",
            attrs: {
              rel: "preload",
              as: "image",
              href: "/deepak.jpg",
              fetchpriority: "high",
              imagesrcset: "/deepak.jpg 1x, /deepak.jpg 2x",
              imagesizes: "(max-inline-size: 768px) 100vw, 371px",
            },
            injectTo: "head",
          },
          {
            tag: "script",
            attrs: { type: "application/ld+json" },
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Deepak Kushwah",
              jobTitle: "Full Stack Developer",
              url: "https://deepakkhiraofficial.netlify.app",
              image: "https://deepakkhiraofficial.netlify.app/deepak.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9109001109",
                email: "deepakkushwah475110@gmail.com",
                contactType: "personal",
              },
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
