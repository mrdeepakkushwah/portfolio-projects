import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mrdeepakkushwah",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/mrdeepakkushwah",
      icon: <FaGithub />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/MrDeepakKushwahJi/",
      icon: <FaFacebook />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/frontendwithdeepak/",
      icon: <FaInstagram />,
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `https://deepakkhiraofficail.onrender.com/contact`,{
        name : formData.name,
        email : formData.email, 
        message : formData.message
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res?.data?.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error(
        err?.response?.data?.error || "Server error. Try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Contact Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <a
                  href="mailto:deepakkushwah475110@gmail.com"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  deepakkushwah475110@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-500 text-xl" />
                <a
                  href="tel:+919109001109"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  +91 9109001109
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-blue-100 hover:text-blue-600 transition"
                >
                  <span className="text-lg">{social.icon}</span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <ToastContainer autoClose={1500} />
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">
            Send Me a Message
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
