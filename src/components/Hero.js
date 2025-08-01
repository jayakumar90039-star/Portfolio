import React from 'react';
import './Hero.css';
import ProfileImage from '../assets/heroImage.webp';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Jayakumar N</span>
            </h1>
            <h2 className="hero-subtitle">Software Developer</h2>
            <p className="hero-description">
              Passionate software developer with expertise in modern web technologies. 
              I create innovative solutions and build scalable applications that make a difference. 
              Welcome to my digital portfolio where creativity meets functionality.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={ProfileImage}
              alt="Jayakumar N"
              className="profile-photo"
              style={{ width: '220px', height: '220px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
            />
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;