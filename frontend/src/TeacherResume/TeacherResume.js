import React from 'react';
import './TeacherResume.css';

const TeacherResume = ({ data }) => {
  const { userId, name, aboutUs, contact, education, skills, experience, references } = data;

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
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.school}</h3>
            <p>{exp.role} ({exp.startDate} - {exp.endDate})</p>
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
        <h2>References</h2>
        {references.map((ref, index) => (
          <div key={index}>
            <p>{ref.name}, {ref.position}</p>
            <p>Contact: {ref.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherResume;
