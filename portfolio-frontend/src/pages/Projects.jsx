import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { title } from "framer-motion/client";

const Projects = () => {
  // Projects data matching your resume
  const projects = [
    {
      title: "Simple Banking Application",
      description:
        "Console-based banking app with deposit, withdrawal, and balance inquiry functionalities using secure password protection.",
      tech: ["Java", "File Handling", "OOP"],
      github: "https://github.com/mrdeepakkushwah/Simple-Bank-Application.git",
      demo: null,
      period: "Mar 2024 - June 2024",
    },
    {
      title: "Random User Data Website",
      description:
        "Dynamic UI that fetches and displays random user data with Local Storage persistence.",
      tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
      github: "https://github.com/mrdeepakkushwah/Random-User-Application-.git",
      demo: "https://randomuserapplication.netlify.app/",
      period: "Feb 2024 - Apr 2024",
    },
    {
      title: "React Quiz App",
      description: 
      `Optimized Project Description:
       A fast, interactive quiz to test your React knowledge with:
      ✔ 14 key React questions
      ✔ Instant scoring & feedback
      ✔ Answer review to learn from mistakes
      ✔ Mobile - friendly design `,
      tech: ["HTML","Css","Javascript","React.js", "UML"],
      github:"https://github.com/mrdeepakkushwah/Quiz-Application-.git",
      demo: "https://github.com/mrdeepakkushwah/Quiz-Application-.git",
      period: "Mar 2025",
    },
    {
      title:"React Todo Application",
      description:"React Todo App, What do app like curd base Todo . like create todo and update or delete todo ,Delete all Todo. and notification for  use  React Toastify liberery ",
      tech:["React.js","Tailwind CSS","Toastify Libirery"],
      github: "https://github.com/mrdeepakkushwah/Quiz-Application-.git",
      demo:"https://github.com/mrdeepakkushwah/Quiz-Application-.git",
      period: "Apr 2025"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800"
        >
          My Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-slate-800">
                    {project.title}
                  </h3>
                  {project.period && (
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {project.period}
                    </span>
                  )}
                </div>

                <p className="text-slate-600 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-700 hover:text-blue-900 transition text-sm"
                    >
                      <FaGithub className="text-base" /> Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-emerald-600 hover:text-emerald-800 transition text-sm"
                    >
                      <FaExternalLinkAlt className="text-base" /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="text-slate-400 text-sm">
                      Demo unavailable
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
