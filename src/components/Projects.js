// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "DigitalFort",
    description: "A password management app that securely stores and manages passwords.",
    technologies: "React, Node.js, MongoDB",
    link: "https://github.com/your-repo/digitalfort" // Replace with your actual project link
  },
  {
    title: "Thirdeye",
    description: "A women safety app that connects users to emergency services and contacts.",
    technologies: "Android Studio, Java, XML, MySql",
    link: "https://github.com/Mayuri734/LogSignSQL" // Replace with your actual project link
  },
  {
    title: "FeedForward",
    description: "A portal connecting food donors with NGOs to reduce food waste.",
    technologies: "HTML, CSS, JavaScript, Flask, MySQL",
    link: "https://github.com/your-repo/feedforward" // Replace with your actual project link
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
