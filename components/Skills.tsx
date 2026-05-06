'use client';

import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                {/* Simple SVG placeholder for skill icon */}
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="4" fill="#21279D"/>
                  <path d="M12 6L16 10L12 14L8 10L12 6Z" fill="white"/>
                  <path d="M12 10L16 14L12 18L8 14L12 10Z" fill="white"/>
                </svg>
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{category.name}</h3>
                <p className="skill-description">{category.skills.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;