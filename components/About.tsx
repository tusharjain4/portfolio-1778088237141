'use client';

import React from 'react';

interface AboutProps {
  about: string;
  currentRole: string;
  highlights: string[];
}

const About: React.FC<AboutProps> = ({ about, currentRole, highlights }) => {
  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">My Journey</h2>
        <p className="about-text">{about}</p>

        <div className="journey-list" role="list">
          {/* Current Role */}
          <article className="journey-item" role="listitem">
            <div className="journey-header">
              <div className="journey-icon">
                {/* Simple SVG placeholder for institution icon */}
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 22H20V10L12 3L4 10V22ZM6 12V20H18V12L12 7L6 12Z" fill="#000000"/>
                  <path d="M10 14H14V18H10V14Z" fill="#000000"/>
                </svg>
              </div>
              <div className="journey-info">
                <h3 className="journey-institution">Current Role</h3>
                <p className="journey-period">{currentRole}</p>
              </div>
            </div>
            <div className="journey-details">
              {/* Simple SVG placeholder for journey line */}
              <svg className="journey-line" viewBox="0 0 48 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0V120" stroke="#E2E2E2" strokeWidth="2"/>
                <circle cx="24" cy="24" r="8" fill="#21279D"/>
              </svg>
              <p className="journey-description">
                Currently contributing to cutting-edge projects and continuously expanding my skill set.
              </p>
            </div>
          </article>

          {/* Highlights as a series of journey items */}
          {highlights.map((highlight, index) => (
            <article className="journey-item" role="listitem" key={index}>
              <div className="journey-header">
                <div className="journey-icon">
                  {/* Simple SVG placeholder for achievement icon */}
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#000000"/>
                  </svg>
                </div>
                <div className="journey-info">
                  <h3 className="journey-institution">Key Achievement</h3>
                  <p className="journey-period">Highlight {index + 1}</p>
                </div>
              </div>
              <div className="journey-details">
                {/* Simple SVG placeholder for journey line */}
                <svg className="journey-line" viewBox="0 0 48 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 0V120" stroke="#E2E2E2" strokeWidth="2"/>
                  <circle cx="24" cy="24" r="8" fill="#21279D"/>
                </svg>
                <p className="journey-description">{highlight}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;