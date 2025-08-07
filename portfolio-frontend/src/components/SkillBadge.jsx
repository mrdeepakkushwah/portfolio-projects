import React, { useEffect,useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import resumePDF from '/Deepak_Kushwah_ Resume.pdf'; // adjust path if needed
import { toast } from "react-toastify";

const SkillBadge = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const handleDownload = () => {
        if (!toast.isActive("download-toast")) {
            toast.success("Downloading resume...", { toastId: "download-toast" });
        }
    };

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="skills" className="py-16 px-4 bg-gray-50 relative">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
                >
                    Technical Skills
                </motion.h2>

                {/* Technical Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {/* Frontend */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">
                            Frontend Development
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "HTML",
                                "CSS",
                                "Bootstrap",
                                "JavaScript",
                                "React.js",
                                "Redux",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:scale-105 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold text-green-600 mb-4">
                            Backend Development
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["Node.js", "Express.js", "RESTful APIs", "Axios"].map(
                                (skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:scale-105 transition"
                                    >
                                        {skill}
                                    </span>
                                )
                            )}
                        </div>
                    </motion.div>

                    {/* Database & Tools */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold text-purple-600 mb-4">
                            Database & Tools
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["SQL", "MongoDB", "Git", "GitHub", "Postman"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:scale-105 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Programming Languages */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold text-orange-600 mb-4">
                            Programming Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["Java", "JavaScript", "OOP", "DSA"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm hover:scale-105 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Soft Skills Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="bg-white p-8 rounded-xl shadow-md"
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Achievements & Strengths
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        {[
                            "Problem Solving",
                            "Team Collaboration",
                            "Communication",
                            "MERN Stack Certified",
                            "Java DSA Certified",
                        ].map((skill) => (
                            <motion.span
                                key={skill}
                                variants={itemVariants}
                                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                  
                </motion.div>

                <div className="mt-8 flex justify-center">
                    <motion.a
                        href={resumePDF}
                        download="Deepak_Kushwah_Resume.pdf"
                        onClick={handleDownload}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition-all active:scale-95"
                        aria-label="Download Resume"
                        title="Download Resume"
                    >
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            <span>Download Resume</span>
                        </div>
                    </motion.a>
                </div>


            </div>

        </section>
    );
};

export default SkillBadge;
