import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jayakumar-n-ba96b132b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: 'fab fa-linkedin-in',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jayakumar90039-star',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: 'fas fa-envelope',
      color: '#ea4335'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jk_xoul?igsh=MW5uZjdmeWpvYjRpZA==',
      icon: 'fab fa-instagram',
      color: '#e4405f'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Jayakumar_njk/',
      icon: 'fas fa-code',
      color: '#ffa116'
    }
  ];

  return (
    <div className="social-links">
      <div className="social-container">
        <h3>Connect With Me</h3>
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ '--hover-color': link.color }}
              title={link.name}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <div className="footer-text">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <p>Built with React.js & ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
