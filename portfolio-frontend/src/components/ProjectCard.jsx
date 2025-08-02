import React from "react";
import { motion } from "framer-motion";

// Animation settings (cleaner & reusable)
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
});

const ProjectCard = () => {
    const projects = [
        {
            id: 1,
            title: "Simple Banking Application",
            description: "Console-based app with secure transactions. (Java, File Handling)",
            codeUrl: "https://github.com/deepakkhiraofficial/Simple-Bank-Application.git",
            liveUrl: "https://github.com/deepakkhiraofficial/Simple-Bank-Application.git",
        },
        {
            id: 2,
            title: "Random User Data Website",
            description: "Dynamic UI with Local Storage integration. (JavaScript, Fetch API)",
            codeUrl: "https://github.com/deepakkhiraofficial/Random-User-Application-.git",
            liveUrl: "https://github.com/deepakkhiraofficial/Random-User-Application-.git",
        },
    ];

    return (
        <section id="projects" className="py-12 px-4 bg-gray-50">
            <motion.h2
                className="text-4xl font-bold text-center mb-10 text-blue-600"
                {...fadeUp(0)}
            >
                Projects
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                {projects.map((project, idx) => (
                    <motion.article
                        key={project.id}
                        className="bg-white rounded-xl shadow-md border p-6 hover:shadow-xl transition duration-300"
                        {...fadeUp(0.2 * idx)}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring"
                                aria-label={`View ${project.title} code on GitHub`}
                            >
                                GitHub Code
                            </a>
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-green-600 hover:underline focus:outline-none focus:ring"
                                aria-label={`Visit live demo of ${project.title}`}
                            >
                                Live Demo
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default ProjectCard;
