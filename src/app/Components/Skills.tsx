import React from 'react';

const skills = ["Programming", "JavaScript", "React.Js", "Next.JS", "Node.JS", "Express.JS", "Python"];

const Skills = () => (
  <section className="skills" id="skills">
    <h2>Skills</h2>
    <div className="skill-container">
      {skills.map((skill, idx) => (
        <div key={idx} className="skill-card">{skill}</div>
      ))}
    </div>
  </section>
);

export default Skills;
