// src/components/Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skill-container">
        <div className="skill">
          <label>Core & Advance Java</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}>80%</div>
          </div>
        </div>

        <div className="skill">
          <label>RDBMS</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}>90%</div>
          </div>
        </div>

        <div className="skill">
          <label>HTML & CSS</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}>85%</div>
          </div>
        </div>

        <div className="skill">
          <label>Javascript</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}>70%</div>
          </div>
        </div>
      </div>
    </section>
  );
}    

export default Skills;
