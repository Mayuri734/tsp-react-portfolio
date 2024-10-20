// src/components/Qualification.js
import React from 'react';
import './Qualification.css';

const qualifications = [
  {
    year: "2023 - Present",
    degree: "B.Tech in Computer Science and Business Systems",
    institution: "St. Vincent Pallotti College of Engineering & Technology, Nagpur, Maharashtra, India",
    description: "Pursuing a Bachelor's degree with a focus on software development.",
  },
  {
    year: "2020 - 2022",
    degree: "Diploma in Computer Science Engineering",
    institution: "Government Polytechnic College, Nagpur, Maharashtra, India",
    description: "Completed diploma with top grades, focusing on programming and networking.",
  },
  {
    year: "2020",
    degree: "High School Diploma",
    institution: "Somalwar High School, Khamla, Nagpur, Maharashtra, India",
    description: "Graduated with honors, involved in various tech clubs.",
  }
];

function Qualification() {
  return (
    <section id="qualifications">
      <h2>Qualifications</h2>
      <div className="timeline">
        {qualifications.map((qual, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-line"></div>
            <div className="timeline-content">
              <h3>{qual.degree}</h3>
              <h4>{qual.institution}</h4>
              <p>{qual.description}</p>
              <span className="timeline-year">{qual.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Qualification;
