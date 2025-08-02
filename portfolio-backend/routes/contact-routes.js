import express from "express";  
const router = express.Router();
import contact from "../controller/contact-controller.js";

// POST route for contact form submission
router.post("/", contact);

// Export the router
export default router;
// This file defines the contact routes for handling form submissions.