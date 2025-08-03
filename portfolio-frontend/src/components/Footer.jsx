import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const socialLinks = [
  {
    icon: <FaGithub className="text-xl" aria-hidden="true" />,
    url: "https://github.com/deepakkhiraofficial",
    label: "Visit Deepak Kushwah's GitHub profile",
  },
  {
    icon: <FaLinkedin className="text-xl" aria-hidden="true" />,
    url: "https://www.linkedin.com/in/deepakkhiraofficial/",
    label: "Visit Deepak Kushwah's LinkedIn profile",
  },
  {
    icon: <SiLeetcode className="text-xl" aria-hidden="true" />,
    url: "https://leetcode.com/deepakkhiraofficial/",
    label: "Visit Deepak Kushwah's LeetCode profile",
  },
  {
    icon: <FaEnvelope className="text-xl" aria-hidden="true" />,
    url: "mailto:deepakkushwah475110@gmail.com",
    label: "Send email to Deepak Kushwah",
  },
  {
    icon: <FaFilePdf className="text-xl" aria-hidden="true" />,
    url: "/Deepak_Kushwah_Resume.pdf", // Adjust path if needed
    label: "Download Deepak Kushwah's Resume PDF",
  },
];

// Animation variants for fade-up effect
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: customDelay },
  }),
};

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const location = useLocation();

  // Animate footer on entering viewport
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Smooth scroll helper for internal links
  const handleSmoothScroll = (e, to) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const section = document.querySelector(to);
      if (section) {
        section.focus({ preventScroll: true }); // Focus for accessibility before scrolling
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = "/" + to;
    }
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUpVariant}
      className="bg-gray-900 text-gray-100 py-12 min-h-[220px] dark:bg-gray-800 dark:text-gray-200"
      aria-label="Site Footer"
    >
      <div className="container mx-auto px-4 min-h-[220px]">
        <nav
          className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0"
          aria-label="Footer navigation"
        >
          {/* Logo and copyright */}
          <motion.div
            custom={0.1}
            variants={fadeUpVariant}
            className="mb-6 text-center md:text-left flex-1"
          >
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-blue-300 transition dark:text-gray-100 dark:hover:text-blue-400"
              aria-label="Homepage"
            >
              Deepak Kushwah
            </Link>
            <p className="mt-2 text-sm text-gray-200 dark:text-gray-400">
              Full Stack Developer | MERN Specialist
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            custom={0.3}
            variants={fadeUpVariant}
            className="mb-6 text-center md:text-left flex-1"
          >
            <h3
              className="text-white font-medium mb-3 dark:text-gray-100"
              id="footer-quick-links"
            >
              Quick Links
            </h3>
            <div
              className="flex flex-col space-y-2 text-sm"
              role="list"
              aria-labelledby="footer-quick-links"
            >
              {[
                { label: "About Me", to: "about" },
                { label: "Projects", to: "projects" },
                { label: "skills", to: "skills" },
                { label: "Achievements", to: "achievements" },
              ].map(({ label, to }) => (
                <a
                  key={to}
                  href={to}
                  onClick={(e) => handleSmoothScroll(e, to)}
                  className="hover:text-blue-300 transition dark:hover:text-blue-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  role="listitem"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.address
            custom={0.5}
            variants={fadeUpVariant}
            className="mb-6 not-italic text-center md:text-left flex-1"
            aria-labelledby="footer-contact"
          >
            <h3
              className="text-white font-medium mb-3 dark:text-gray-100"
              id="footer-contact"
            >
              Contact
            </h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-200 dark:text-gray-400">
              <a
                href="mailto:deepakkushwah475110@gmail.com"
                className="hover:text-blue-300 transition dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                deepakkushwah475110@gmail.com
              </a>
              <a
                href="tel:+919109001109"
                className="hover:text-blue-300 transition dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                +91 9109001109
              </a>
            </div>
          </motion.address>

          {/* Social links */}
          <motion.div
            custom={0.7}
            variants={fadeUpVariant}
            className="text-center md:text-left flex-1"
            aria-label="Social media links"
            role="region"
          >
            <h3 className="text-white font-medium mb-3 dark:text-gray-100">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(({ icon, url, label }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:hover:bg-blue-500"
                  aria-label={label}
                  title={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </nav>

        {/* Copyright */}
        <motion.div
          custom={0.9}
          variants={fadeUpVariant}
          className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400 dark:border-gray-700 dark:text-gray-500"
          role="contentinfo"
        >
          <p>&copy; {new Date().getFullYear()} Deepak Kushwah. All rights reserved.</p>
          <p className="mt-1 text-xs">
            Built with React, Tailwind CSS, and{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
