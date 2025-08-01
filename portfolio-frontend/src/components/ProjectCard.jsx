import React from "react";
const ProjectCard = () => {

    const projectData = 
        [
            {
                id: 1, title: 'Simple Banking Application', descriptions: 'Console-based app with secure transactions. (Java, File Handling)',
                code: 'https://github.com/mrdeepakkushwah/Simple-Bank-Application.git', link: 'https://github.com/mrdeepakkushwah/Simple-Bank-Application.git'
            },
            {
                id: 2, title: 'Random User Data Website', descriptions: 'Dynamic UI with Local Storage integration. (JavaScript, Fetch API)',
                code: 'https://github.com/mrdeepakkushwah/Random-User-Application-.git', link: 'https://github.com/mrdeepakkushwah/Random-User-Application-.git'
            }
        ]

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projectData.map((data) => (
                    <div className="card" key={data.id}>
                        <h3>{data.title}</h3>
                        <p>{data.descriptions}</p>
                        <a href={data.code} target="_blank" rel="noopener noreferrer">GitHub Code</a>
                        <a href={data.link} target="_blank" rel="noopener noreferrer">Check</a>
                 </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectCard;
