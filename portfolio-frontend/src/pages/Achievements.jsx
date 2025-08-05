import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaUserTie, FaLaptopCode } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Achievements = () => {
    const achievements = useMemo(() => [
        {
            icon: <FaCertificate className="text-3xl" aria-hidden="true" />,
            title: "MERN Stack Certification",
            issuer: "Coding Thinker",
            description: "Completed comprehensive training in MongoDB, Express, React, and Node.js",
            date: "Jul 2024",
            isoDate: "2024-07",
            color: "text-blue-600 bg-blue-50",
        },
        {
            icon: <FaCertificate className="text-3xl" aria-hidden="true" />,
            title: "Java DSA Certification",
            issuer: "Coding Thinker",
            description: "Mastered Data Structures & Algorithms with 100+ coding problems solved",
            date: "Jan 2024",
            isoDate: "2024-01",
            color: "text-green-600 bg-green-50",
        },
        {
            icon: <FaUserTie className="text-3xl" aria-hidden="true" />,
            title: "Tata Data Visualization",
            issuer: "Forage Virtual Experience",
            description: "Created executive dashboards for data-driven decision making",
            date: "Jan 2025",
            isoDate: "2025-01",
            color: "text-purple-600 bg-purple-50",
        },
        {
            icon: <FaLaptopCode className="text-3xl" aria-hidden="true" />,
            title: "Citi ICG Technology",
            issuer: "Forage Virtual Experience",
            description: "Developed UML diagrams and Java-based stock visualization tool",
            date: "Mar 2025",
            isoDate: "2025-03",
            color: "text-orange-600 bg-orange-50",
        },
        {
            icon: <FaLaptopCode className="text-3xl" aria-hidden="true" />,
            title: "Development & Advanced Engineering",
            issuer: "Forage Virtual Experience",
            description: `1. Wrote a class to perform search on an interactive website in Java using Spring Boot.\n2. Set up automated builds using Jenkins to validate code changes on every push.`,
            date: "Apr 2025",
            isoDate: "2025-04",
            color: "text-green-600 bg-green-50",
        },
    ], []);

    const skills = useMemo(() => [
        "Problem Solving",
        "Full Stack Development",
        "Data Structures",
        "Team Collaboration",
        "Clean Code",
        "Responsive Design",
        "API Development",
        "Continuous Learning",
    ], []);

    // Animation variants for container and children
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, duration: 0.5 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="achievements"
            className="py-16 px-4 bg-gray-50"
            aria-label="Achievements and Core Strengths"
        >
            <Helmet>
                <title>Achievements | Deepak Khira</title>
                <link rel="canonical" href="https://deepakkhiraofficial.netlify.app/achievements" />
            </Helmet>

            <div className="max-w-6xl mx-auto">
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        My Achievements
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Certifications and recognitions that showcase my technical growth
                    </p>
                </motion.header>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    role="list"
                >
                    {achievements.map(({ icon, title, issuer, description, date, isoDate, color }, idx) => {
                        const borderColor = color.replace("text", "border");
                        return (
                            <motion.article
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 ${borderColor} flex`}
                                role="listitem"
                            >
                                <div className={`p-3 rounded-full ${color} mr-4 flex-shrink-0`}>
                                    {icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
                                    <p className="text-gray-600 mb-2">{issuer}</p>
                                    <p className="text-gray-500 text-sm mb-3 whitespace-pre-line">{description}</p>
                                    <time className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded" dateTime={isoDate || undefined}>
                                        {date}
                                    </time>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                <motion.section
                    aria-labelledby="skills-heading"
                    className="bg-white p-8 rounded-xl shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h3
                        id="skills-heading"
                        className="text-2xl font-bold text-gray-800 mb-6 flex items-center"
                    >
                        <FaTrophy className="text-yellow-500 mr-2" aria-hidden="true" />
                        Core Strengths
                    </h3>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-3" role="list">
                        {skills.map((skill, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition"
                            >
                                <span
                                    className={`w-2 h-2 rounded-full ${idx % 2 === 0 ? "bg-blue-500" : "bg-green-500"}`}
                                    aria-hidden="true"
                                ></span>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </motion.section>
            </div>
        </section>
    );
};

export default Achievements;
