import e from "express";
import nodemailer from "nodemailer";

const contact = async (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res
        .status(400)
        .json({ success: false, error: "All fields are required." });
    }
    
    try {
        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });
    
        await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
    
        return res
        .status(200)
        .json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, error: "Failed to send message." });
    }
    
}
export default contact;
// Compare this snippet from portfolio-backend/routes/contact-routes.js: