import React, { useMemo } from "react";
import { FaTrophy, FaCertificate, FaUserTie, FaLaptopCode } from "react-icons/fa";

const Achievements = () => {
    // Achievements data
    const achievements = useMemo(() => [
        {
            icon: <FaCertificate className="text-3xl" aria-hidden="true" />,
            title: "MERN Stack Certification",
            issuer: "Coding Thinker",
            description: "Completed comprehensive training in MongoDB, Express, React, and Node.js",
            date: "Jul 2024",
            color: "text-blue-600 bg-blue-50",
        },
        {
            icon: <FaCertificate className="text-3xl" aria-hidden="true" />,
            title: "Java DSA Certification",
            issuer: "Coding Thinker",
            description: "Mastered Data Structures & Algorithms with 100+ coding problems solved",
            date: "Jan 2024",
            color: "text-green-600 bg-green-50",
        },
        {
            icon: <FaUserTie className="text-3xl" aria-hidden="true" />,
            title: "Tata Data Visualization",
            issuer: "Forage Virtual Experience",
            description: "Created executive dashboards for data-driven decision making",
            date: "Jan 2025",
            color: "text-purple-600 bg-purple-50",
        },
        {
            icon: <FaLaptopCode className="text-3xl" aria-hidden="true" />,
            title: "Citi ICG Technology",
            issuer: "Forage Virtual Experience",
            description: "Developed UML diagrams and Java-based stock visualization tool",
            date: "Mar 2025",
            color: "text-orange-600 bg-orange-50",
        },
        {
            icon: <FaLaptopCode className="text-3xl" aria-hidden="true" />,
            title: "Development & Advanced Engineering",
            issuer: "Forage Virtual Experience",
            description: `1. Wrote a class to perform search on an interactive website in Java using Spring Boot.\n2. Set up automated builds using Jenkins to validate code changes on every push.`,
            date: "Apr 2025",
            color: "text-green-600 bg-green-50",
        },
    ], []);

    // Skills data
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

    return (
        <section
            id="achievements"
            className="py-16 px-4 bg-gray-50"
            aria-label="Achievements and Core Strengths"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <header className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        My Achievements
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Certifications and recognitions that showcase my technical growth
                    </p>
                </header>

                {/* Achievements List */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {achievements.map(({ icon, title, issuer, description, date, color }, idx) => {
                        const borderColor = color.replace("text", "border");
                        return (
                            <article
                                key={idx}
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
                                    <time className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded" dateTime={date}>
                                        {date}
                                    </time>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Skills Section */}
                <section aria-labelledby="skills-heading" className="bg-white p-8 rounded-xl shadow-md">
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
                                    className={`w-2 h-2 rounded-full ${idx % 2 === 0 ? "bg-blue-500" : "bg-green-500"
                                        }`}
                                    aria-hidden="true"
                                ></span>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Achievements;
