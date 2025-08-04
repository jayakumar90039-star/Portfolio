import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Dhanalakshmi Srinivasan College of Engineering And Technology",
      duration: "2024 - Present",
      description: "Specialized in software engineering, data structures, algorithms, and web development. Maintained excellent academic performance with focus on practical application of theoretical concepts.",
      achievements: [] // Add this line
    },
    {
      id: 2,
      degree: "HSC",
      institution: "Govt.Hr.Sec School,Krishnapuram",
      duration: "2023 - 2024",
      description: "The HSC (Higher Secondary Certificate) is a two-year academic program in India, typically covering grades 12. It offers various streams like Science, engineering, and Arts, preparing students for higher education and career opportunities.",
      achievements: [] // Add this line
    },
    {
      id: 3,
      degree: "SSLC",
      institution: "Govt.Hr.Sec School,Krishnapuram",
      duration: "2021 - 2022",
      description: "The SSLC (Secondary School Leaving Certificate) is a crucial milestone in the Indian education system, awarded after successful completion of 10th grade. It provides foundational knowledge across core subjects including Mathematics, Science, Social Studies, and Languages.",
      achievements: [] // Add this line
    }
    
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My Academic Journey</p>
        </div>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={edu.id} className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="duration">{edu.duration}</span>
                </div>
                <h4 className="institution">{edu.institution}</h4>
                <p className="description">{edu.description}</p>
                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
