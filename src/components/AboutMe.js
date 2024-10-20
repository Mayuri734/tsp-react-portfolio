// src/components/AboutMe.js
import React from 'react';
import { FaLinkedin, FaInstagram, FaTelegram, FaGithub } from 'react-icons/fa'; // Make sure to install react-icons if you haven't

function AboutMe() {
  return (
    <section id="aboutme">
      <h2>About Me</h2>
      <p>
        I'm a passionate software developer with a keen interest in building
        impactful applications. I love learning new technologies and collaborating
        with others to create innovative solutions.
      </p>

      <div className="social-media">
        <h3>Connect with me:</h3>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/mayuri-anandikar-6806b827a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/mayuri_anandikar_07?igsh=MThpMWZxaXhtZG4w" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="http://t.me/Mayuri158" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={30} />
          </a>
          <a href="https://github.com/Mayuri734" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
