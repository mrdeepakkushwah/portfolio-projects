// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contact-routes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

// Setup for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin:
      process.env.CLIENT_URL || "https://deepakkhiraofficial.netlify.app/",
    credentials: true,
  })
);

// ✅ Contact Route
app.use("/contact", contactRoutes);

// ✅ Serve frontend (static files)
const DIST_PATH = path.join(__dirname, "dist");
app.use(express.static(DIST_PATH));

// ✅ For all other routes - serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(DIST_PATH, "index.html"));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on ${process.env.VITE_BACKEND_URL || `http://localhost:${PORT}`}`);
  console.log(`✅ Frontend served from ${DIST_PATH}`);  
  console.log(`✅ CORS enabled for ${process.env.CLIENT_URL || "http://localhost:5173"}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV || "development"}`);
});
