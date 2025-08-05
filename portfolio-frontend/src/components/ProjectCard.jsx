import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Reusable fadeUp animation
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
});

const ProjectCard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/projects.json") // fetching from public/projects.json
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading projects:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section id="projects" className="py-12 px-4 bg-gray-50">
            <motion.h2
                className="text-4xl font-bold text-center mb-10 text-blue-600"
                {...fadeUp(0)}
            >
                Projects
            </motion.h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading projects...</p>
            ) : (
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

                            {/* Tech badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech?.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 mt-4">
                                <a
                                    href={project.codeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring"
                                >
                                    GitHub Code
                                </a>

                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-green-600 hover:underline focus:outline-none focus:ring"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProjectCard;
