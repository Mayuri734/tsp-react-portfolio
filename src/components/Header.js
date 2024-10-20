// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Welcome to TSP My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#qualification">Qualification</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact-me">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
