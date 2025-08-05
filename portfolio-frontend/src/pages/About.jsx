import React from "react";
import { Helmet } from "react-helmet-async";
import {
    FaGraduationCap,
    FaBriefcase,
    FaCertificate,
    FaExternalLinkAlt,
    FaFilePdf,
} from "react-icons/fa";

const certifications = [
    {
        name: "MERN Stack Development",
        issuer: "Coding Thinker",
        url: "https://drive.google.com/file/d/1PuHra4fQ1AHJ3bGtwwrVo6jMDtV9P_zW/view",
        borderColor: "border-blue-500",
    },
    // ... other certifications
];

const experiences = [
    {
        title: "Tata Data Visualisation",
        role: "Virtual Internship",
        url: "https://drive.google.com/file/d/11Rl0Pl_VtPaqd_qcQ5DCV4jrDlH_sHFF/view",
        borderColor: "border-purple-600",
        date: "Jan 2025",
        points: [
            "Created executive dashboards for data analysis",
            "Prepared client-facing visual reports",
        ],
    },
    // ... other experiences
];

const About = () => (
    <section id="about" className="py-16 px-4 bg-gray-50">
        {/* Helmet should be used once per page */}
        <Helmet>
            <title>About | Deepak Khira</title>
            <link rel="canonical" href="https://deepakkhiraofficial.netlify.app/about" />
        </Helmet>

        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Professional Profile
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Full Stack Developer specializing in MERN stack with Java expertise
                </p>
                <div
                    aria-hidden="true"
                    className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"
                ></div>
            </header>

            {/* Introduction Card */}
            <article className="bg-white p-8 rounded-xl shadow-md mb-10 border-t-4 border-blue-600">
                <p className="text-lg text-gray-700 leading-relaxed">
                    I'm a{" "}
                    <span className="font-semibold text-blue-600">solution-driven developer</span>{" "}
                    with expertise in building secure, scalable web applications. My technical arsenal includes:
                </p>
                <ul className="grid grid-cols-2 gap-2 mt-4 list-disc list-inside text-gray-700">
                    {["MERN Stack", "Java & OOP", "RESTful APIs", "Data Structures"].map(
                        (skill) => (
                            <li key={skill}>{skill}</li>
                        )
                    )}
                </ul>
            </article>

            {/* Education */}
            <section className="mb-10" aria-labelledby="education-heading">
                <h3
                    id="education-heading"
                    className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"
                >
                    <FaGraduationCap className="text-blue-600 text-xl" aria-hidden="true" />
                    Education
                </h3>

                <div className="space-y-4">
                    {/* Education entries here */}
                    <article className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition flex justify-between items-start">
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800">
                                B.Sc. Computer Science
                            </h4>
                            <p className="text-gray-600">Jiwaji University, Gwalior</p>
                        </div>
                        <time
                            className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                            dateTime="2022-2024"
                        >
                            2021 - 2024
                        </time>
                    </article>

                    {/* Add other education items similarly */}
                </div>
            </section>

            {/* Experience */}
            <section className="mb-10" aria-labelledby="experience-heading">
                <h3
                    id="experience-heading"
                    className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"
                >
                    <FaBriefcase className="text-blue-600 text-xl" aria-hidden="true" />
                    Professional Experience
                </h3>

                <div className="space-y-4">
                    {experiences.map(
                        ({ title, role, url, borderColor, date, points }) => (
                            <a
                                key={title}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block bg-white p-6 rounded-xl shadow-sm border-l-4 ${borderColor} hover:shadow-md transition group`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 group-hover:text-current">
                                            {title}
                                        </h4>
                                        <p className="text-gray-600">{role}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <time
                                            className={`text-sm bg-opacity-20 px-3 py-1 rounded-full ${borderColor.replace(
                                                "border-",
                                                "bg-"
                                            )} text-opacity-90`}
                                            dateTime={date}
                                        >
                                            {date}
                                        </time>
                                        <FaExternalLinkAlt
                                            className="text-gray-400 group-hover:text-current"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 mt-3 pl-1 space-y-1 text-sm">
                                    {points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </a>
                        )
                    )}
                </div>
            </section>

            {/* Certifications */}
            <section aria-labelledby="certifications-heading">
                <h3
                    id="certifications-heading"
                    className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"
                >
                    <FaCertificate className="text-blue-600 text-xl" aria-hidden="true" />
                    Certifications
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                    {certifications.map(({ name, issuer, url, borderColor }, idx) => (
                        <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition border-t-4 ${borderColor} group`}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">
                                        {name}
                                    </h4>
                                    <p className="text-sm text-gray-600">{issuer}</p>
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                    <FaFilePdf className="text-red-500" aria-hidden="true" />
                                    <FaExternalLinkAlt
                                        className="text-gray-400 group-hover:text-blue-500 text-sm"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    </section>
);

export default About;
