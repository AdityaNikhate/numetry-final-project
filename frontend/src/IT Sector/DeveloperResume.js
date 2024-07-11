import React from 'react';
import './DeveloperResume.css';

const DeveloperResume = ({ data }) => {
  const { userId, name, aboutUs, contact, education, skills, projects, experience, accomplishments } = data;

  return (
    <div className="container">
      <div className="header">
        <h1>{name}</h1>
        <p>{aboutUs}</p>
        <p>Contact: {contact}</p>
      </div>

      <div className="section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree} ({edu.startDate} - {edu.endDate})</p>
            <p>Grade: {edu.grade}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies.join(', ')}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">Project Link</a>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.company}</h3>
            <p>{exp.role} ({exp.startDate})</p>
            <p>Responsibilities:</p>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Accomplishments</h2>
        <ul>
          {accomplishments.map((accomplishment, index) => (
            <li key={index}>{accomplishment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeveloperResume;
