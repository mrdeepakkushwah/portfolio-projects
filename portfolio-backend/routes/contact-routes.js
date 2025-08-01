import express from "express";  
// contact-routes.js
// Import necessary modules
const router = express.Router();
import contact from "../controller/contact-controller.js";

// POST route for contact form submission
router.post("/", contact);

// Export the router
export default router;
// This file defines the contact routes for handling form submissions.