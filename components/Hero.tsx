'use client';

import React from 'react';

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, tagline }) => {
  const [firstName, middleInitial, lastName] = name.split(' '); // Assuming "Pooja R. Sonar"
  const firstNameDisplay = firstName;
  const lastNameDisplay = lastName; // e.g., "Sonar"

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text-container">
            <h2 className="hero-hello">Hello</h2>
            <p className="hero-im">I&apos;m</p>
          </div>
          <p className="scroll-text">Scroll to explore</p>
          {/* Using a placeholder image as no specific URL is provided */}
          <img src="/placeholder-hero.png" alt="Developer portfolio showcase" className="hero-image" />
        </div>
        <div className="hero-right">
          <div className="title-stack">
            <div className="title-bg-top"></div>
            <div className="title-text-container">
              <p className="title-product">{firstNameDisplay} {middleInitial}</p>
              <div className="title-designer-section">
                <p className="title-designer">{lastNameDisplay}</p>
                {/* Adapting "Nikita" to the main role for the largest text */}
                <p className="title-name">{role}</p>
              </div>
            </div>
            <div className="title-bg-bottom"></div>
          </div>
          <p className="hero-description">{tagline}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;