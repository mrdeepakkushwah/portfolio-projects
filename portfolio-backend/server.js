import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

import contactRoutes from "./routes/contact-routes.js";

const app = express();
const PORT = process.env.PORT || 3500;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define allowed origins for CORS
const allowedOrigins = [
  process.env.CLIENT_URL || "https://deepakkhiraofficial.netlify.app",
  "http://localhost:3000", // add your local dev URL here
];

// CORS middleware with dynamic origin checking
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(
          new Error(`CORS policy: Origin ${origin} not allowed`),
          false
        );
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

// Explicitly handle preflight OPTIONS requests for all routes
app.options(
  "*",
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Security, logging, and JSON parsing middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Rate limiting for /contact route
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
app.use("/contact", limiter);

// API routes
app.use("/contact", contactRoutes);

// Serve frontend static files (adjust "dist" if needed)
const DIST_PATH = path.join(__dirname, "dist");
app.use(express.static(DIST_PATH));

// SPA fallback: serve index.html for all unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(DIST_PATH, "index.html"));
});

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  // Handle CORS errors specifically
  if (err.message && err.message.startsWith("CORS policy")) {
    return res.status(403).json({ success: false, error: err.message });
  }
  res.status(500).json({ success: false, error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(
    `✅ Server running on ${
      process.env.VITE_BACKEND_URL || `http://localhost:${PORT}`
    }`
  );
  console.log(`✅ Frontend served from ${DIST_PATH}`);
  console.log(`✅ CORS enabled for: ${allowedOrigins.join(", ")}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV || "development"}`);
});
