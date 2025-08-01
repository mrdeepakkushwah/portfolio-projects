import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/deepakkhiraofficial",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/deepakkhiraofficial/",
      label: "LinkedIn"
    },
    {
      icon: <SiLeetcode className="text-xl" />,
      url: "https://leetcode.com/deepakkhiraofficial/",
      label: "LeetCode"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:deepakkushwah475110@gmail.com",
      label: "Email"
    },
    {
      icon: <FaFilePdf className="text-xl" />,
      url: "../assets/Deepak_Kushwah_ Resume.pdf",  // No spaces in filename or replace spaces with %20
      label: "Resume"
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 py-12 min-h-[220px]">
      <div className="container mx-auto px-4 min-h-[220px]">
        <nav className="flex flex-col md:flex-row justify-between items-center" aria-label="Footer navigation">
          {/* Logo and copyright */}
          <div className="mb-6 text-center md:text-left">
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-blue-300 transition"
            >
              Deepak Kushwah
            </Link>
            <p className="mt-2 text-sm text-gray-200">
              Full Stack Developer | MERN Specialist
            </p>
          </div>

          {/* Quick links */}
          <div className="mb-6 text-center md:text-left">
            <h3 className="text-white font-medium mb-3">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="hover:text-blue-300 transition text-sm"
              >
                About Me
              </Link>
              <Link
                to="/projects"
                className="hover:text-blue-300 transition text-sm"
              >
                Projects
              </Link>
              <Link
                to="/achievements"
                className="hover:text-blue-300 transition text-sm"
              >
                Achievements
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <address className="mb-6 not-italic text-center md:text-left">
            <h3 className="text-white font-medium mb-3">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="mailto:deepakkushwah475110@gmail.com"
                className="hover:text-blue-300 transition"
              >
                deepakkushwah475110@gmail.com
              </a>
              <a
                href="tel:+919109001109"
                className="hover:text-blue-300 transition"
              >
                +91 9109001109
              </a>
            </div>
          </address>

          {/* Social links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-full transition-all hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Deepak Kushwah. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-gray-300">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
