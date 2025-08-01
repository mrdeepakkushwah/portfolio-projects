import React from "react";
import { FaGraduationCap, FaBriefcase, FaCertificate, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

const About = () => {
    const certifications = [
        {
            name: "MERN Stack Development",
            issuer: "Coding Thinker",
            url: "https://drive.google.com/file/d/1PuHra4fQ1AHJ3bGtwwrVo6jMDtV9P_zW/view",
            borderColor: "border-blue-500"
        },
        {
            name: "Java Data Structures & Algorithms",
            issuer: "Coding Thinker",
            url: "https://drive.google.com/file/d/1WBwgtUWeUBupImLWpp4Oetxq3jlGDfkY/view",
            borderColor: "border-green-500"
        },
        {
            name: "Tata Data Visualisation",
            issuer: "Forage Virtual Experience",
            url: "https://drive.google.com/file/d/11Rl0Pl_VtPaqd_qcQ5DCV4jrDlH_sHFF/view",
            borderColor: "border-purple-500"
        },
        {
            name: "Citi ICG Technology",
            issuer: "Forage Virtual Experience",
            url: "https://drive.google.com/file/d/1pUELICbP-OQL-_sPgGQOvwVXRAwkV6HE/view",
            borderColor: "border-orange-500"
        }, {
            name: "Development & Advanced Engineering",
            issuer: "Forage Virtual Experience",
            url: "https://drive.google.com/file/d/1pUELICbP-OQL-_sPgGQOvwVXRAwkV6HE/view",
            borderColor: "border-pink-500"
        }
    ];

    return (
        <section id="about" className="py-16 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Professional Profile
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Full Stack Developer specializing in MERN stack with Java expertise
                    </p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>

                {/* Introduction Card */}
                <div className="bg-white p-8 rounded-xl shadow-md mb-10 border-t-4 border-blue-600">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        I'm a <span className="font-semibold text-blue-600">solution-driven developer</span> with expertise in building secure, scalable web applications. My technical arsenal includes:
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <span className="flex items-center">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            <span>MERN Stack</span>
                        </span>
                        <span className="flex items-center">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            <span>Java & OOP</span>
                        </span>
                        <span className="flex items-center">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            <span>RESTful APIs</span>
                        </span>
                        <span className="flex items-center">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            <span>Data Structures</span>
                        </span>
                    </div>
                </div>

                {/* Education */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaGraduationCap className="text-blue-600 text-xl" />
                        Education
                    </h3>

                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition flex justify-between items-start">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">B.Sc. Computer Science</h4>
                                <p className="text-gray-600">Jiwaji University, Gwalior</p>
                            </div>
                            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">2022 - 2024</span>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-600 hover:shadow-md transition flex justify-between items-start">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">Diploma in Computer Applications</h4>
                                <p className="text-gray-600">Makhan Lal Chaturvedi University</p>
                            </div>
                            <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">2021 - 2022</span>
                        </div>
                    </div>
                </div>

                {/* Experience */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaBriefcase className="text-blue-600 text-xl" />
                        Professional Experience
                    </h3>

                    <div className="space-y-4">
                        <a
                            href="https://drive.google.com/file/d/11Rl0Pl_VtPaqd_qcQ5DCV4jrDlH_sHFF/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-600 hover:shadow-md transition group"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600">Tata Data Visualisation</h4>
                                    <p className="text-gray-600">Virtual Internship</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Jan 2025</span>
                                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-purple-500" />
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-700 mt-3 pl-1 space-y-1 text-sm">
                                <li>Created executive dashboards for data analysis</li>
                                <li>Prepared client-facing visual reports</li>
                            </ul>
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1pUELICbP-OQL-_sPgGQOvwVXRAwkV6HE/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-600 hover:shadow-md transition group"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600">Citi ICG Technology</h4>
                                    <p className="text-gray-600">Software Development Intern</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Mar 2025</span>
                                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-orange-500" />
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-700 mt-3 pl-1 space-y-1 text-sm">
                                <li>Developed UML diagrams for loan systems</li>
                                <li>Built Java stock risk visualization tool</li>
                            </ul>
                        </a>

                        <a
                            href="https://drive.google.com/file/d/11Rl0Pl_VtPaqd_qcQ5DCV4jrDlH_sHFF/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-600 hover:shadow-md transition group"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600">Development & Advanced
                                        Engineering</h4>
                                    <p className="text-gray-600">Virtual Internship</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm bg-pink-100 text-pink-800 px-3 py-1 rounded-full">Apr 2025</span>
                                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-pink-500" />
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-700 mt-3 pl-1 space-y-1 text-sm">
                                <li>Object Oriented Programming</li>
                                <li>Code Refactoring</li>
                                <li>Continuous Integration</li>
                                <li>Agile Planning</li>
                            </ul>
                        </a>

                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaCertificate className="text-blue-600 text-xl" />
                        Certifications
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                            <a
                                key={index}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition border-t-4 ${cert.borderColor} group`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">{cert.name}</h4>
                                        <p className="text-sm text-gray-600">{cert.issuer}</p>
                                    </div>
                                    <div className="flex items-center gap-1 mt-1">
                                        <FaFilePdf className="text-red-500" />
                                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500 text-sm" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;