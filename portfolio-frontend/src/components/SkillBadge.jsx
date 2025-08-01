import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ResumeDownloadButton from '../pages/Resume'; // adjust path if needed

const SkillBadge = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

            </div>

            {/* Floating Resume Download Button fixed bottom-right */}
            <div className="fixed bottom-6 right-6 z-50">
                {/* <ResumeDownloadButton /> */}
            </div>
        </section>
    );
};

export default SkillBadge;
