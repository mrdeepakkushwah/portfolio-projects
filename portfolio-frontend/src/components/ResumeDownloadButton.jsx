// src/components/ResumeDownloadButton.jsx
import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import resumePDF from '../assets/Deepak_Kushwah_ Resume.pdf'; // adjust path as needed

export default function ResumeDownloadButton() {
    const handleDownload = () => {
        if (!toast.isActive("download-toast")) {
            toast.success("Downloading resume...", { toastId: "download-toast" });
        }
    };

    return (
        <motion.a
            href={resumePDF}
            download="Deepak_Kushwah_Resume.pdf"
            onClick={handleDownload}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all active:scale-90 cursor-pointer"
            aria-label="Download Resume"
            title="Download Resume"
        >
            {/* Download icon SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
            </svg>
        </motion.a>
    );
}
