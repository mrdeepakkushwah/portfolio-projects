import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import resumePDF from '../assets/Deepak_Kushwah_ Resume.pdf'; // Make sure the filename has no space

export default function ResumeDownloadButton() {
    const [showButton, setShowButton] = useState(false);

    const handleDownload = () => {
        if (!toast.isActive("download-toast")) {
            toast.success("Downloading resume...", { toastId: "download-toast" });
        }
    };

    // Show button after scrolling down 200px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showButton) return null;

    return (
        <></>
    );
}
