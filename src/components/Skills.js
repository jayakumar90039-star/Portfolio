import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: 70, icon: "fab fa-html5" },
        { name: "CSS3", level: 60, icon: "fab fa-css3-alt" },
        { name: "JavaScript", level: 50, icon: "fab fa-js-square" },
        { name: "React.js", level: 85, icon: "fab fa-react" },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Java", level: 70, icon: "fab fa-java" },
        { name: "Node.js", level: 75, icon: "fab fa-node-js" },
        { name: "Python", level: 70, icon: "fab fa-python" },
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MySQL", level: 80, icon: "fas fa-database" },
        { name: "MongoDB", level: 75, icon: "fas fa-leaf" },
       
      ]
    },
    {
      category: "Other Skills",
      skills: [
        { name: "Problem Solving", level: 90, icon: "fas fa-puzzle-piece" },
        { name: "Data Structures", level: 85, icon: "fas fa-project-diagram" },
        { name: "Algorithms", level: 85, icon: "fas fa-code" },
        { name: "System Design", level: 75, icon: "fas fa-sitemap" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My Technical Expertise</p>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <i className={skill.icon}></i>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <div className="info-card">
            <i className="fas fa-trophy"></i>
            <h4>Problem Solving</h4>
            <p>Active on LeetCode with 200+ problems solved</p>
          </div>
          <div className="info-card">
            <i className="fas fa-code-branch"></i>
            <h4>Version Control</h4>
            <p>Proficient in Git workflows and collaboration</p>
          </div>
          <div className="info-card">
            <i className="fas fa-mobile-alt"></i>
            <h4>Responsive Design</h4>
            <p>Creating mobile-first, accessible web applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;