import React from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import resumePDF from '../assets/Deepak_Kushwah_ Resume.pdf'; // Adjust path as needed

export default function Resume() {
    const handleDownload = () => {
        if (!toast.isActive("download-toast")) {
            toast.success("Downloading resume...", { toastId: "download-toast" });
        }
    };

    return (
        <main className="resume-page container mx-auto px-4 py-8 relative">
            <h1 className="text-3xl font-bold text-center mb-8">My Resume</h1>

            <div className="resume-container bg-white shadow-lg rounded-lg overflow-hidden">
                {/* PDF Viewer with fallback options */}
                <div className="pdf-viewer h-[800px]">
                    <object
                        data={resumePDF + "#toolbar=0&navpanes=0"}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        aria-label="Resume PDF Viewer"
                        className="border-b border-gray-200"
                    >
                        <div className="p-4 text-center">
                            <p className="mb-4">Your browser doesn't support PDF embedding.</p>
                            <a
                                href={resumePDF}
                                download="Deepak_Kushwah_Resume.pdf"
                                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md inline-block transition-colors"
                                onClick={handleDownload}
                            >
                                Download Resume Instead
                            </a>
                        </div>
                    </object>
                </div>

                {/* Download Button below PDF */}
                <div className="p-4 text-center bg-gray-50">
                    <a
                        href={resumePDF}
                        download="Deepak_Kushwah_Resume.pdf"
                        className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md inline-block transition-colors"
                        onClick={handleDownload}
                    >
                        Download PDF Version
                    </a>
                </div>
            </div>

            {/* Floating Download Button */}
            <motion.a
                href={resumePDF}
                download="Deepak_Kushwah_Resume.pdf"
                onClick={handleDownload}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all active:scale-90"
                aria-label="Download Resume"
                title="Download Resume"
            >
                {/* Download icon (SVG) */}
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

            {/* Toast Container */}
            <ToastContainer
                position="bottom-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </main>
    );
}
