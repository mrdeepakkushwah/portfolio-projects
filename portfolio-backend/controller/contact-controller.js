import nodemailer from "nodemailer";
import {
  validateName,
  validateEmail,
  validateMessage,
  validateContactForm
} from "../validation/validater.js"; // Import validation functions if needed

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const contact = async (req, res) => {
  const { name, email, message } = req.body;

  const formValidationResult = validateContactForm(req.body);
  if (!formValidationResult.success) {
    return res
      .status(400)
      .json({ success: false, error: formValidationResult.error });
  }
  
  // Validate input fields
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required." });
  }

  if (!validateEmail(email)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid email address." });
  }
  if (!validateMessage(message)) {
    return res
      .status(400)
      .json({ success: false, error: "Message must be at least 10 characters long." });
  }
  if (!validateName(name)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid name format." });
  }
  
  try {
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `📬 New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="color: #2c3e50;">📬 New Message from Portfolio Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="margin-inline-start: 10px; padding: 10px; background: #ffffff; border: 1px solid #ccc; border-radius: 5px;">
            ${message.replace(/\n/g, "<br />")}
          </div>
          <br/>
          <hr style="border-block-start: 1px solid #ccc;" />
          <p style="font-size: 12px; color: #777;">This message was sent from your portfolio website's contact form.</p>
        </div>
      `,
    };
    

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.messageId);

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send message." });
  }
};

export default contact;
