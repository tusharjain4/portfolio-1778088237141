'use client';

import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-top">
          <p className="footer-copyright">© {currentYear} {name}. All rights reserved.</p>
          {/* Email button moved to Contact.tsx */}
        </div>
        {/* Simple SVG placeholder for decorative pattern */}
        <svg className="footer-pattern" viewBox="0 0 1344 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0" width="1344" height="116" fill="#F1F1F1"/>
          <circle cx="50" cy="58" r="10" fill="#21279D"/>
          <circle cx="150" cy="58" r="10" fill="#21279D"/>
          <circle cx="250" cy="58" r="10" fill="#21279D"/>
          <circle cx="350" cy="58" r="10" fill="#21279D"/>
          <circle cx="450" cy="58" r="10" fill="#21279D"/>
          <circle cx="550" cy="58" r="10" fill="#21279D"/>
          <circle cx="650" cy="58" r="10" fill="#21279D"/>
          <circle cx="750" cy="58" r="10" fill="#21279D"/>
          <circle cx="850" cy="58" r="10" fill="#21279D"/>
          <circle cx="950" cy="58" r="10" fill="#21279D"/>
          <circle cx="1050" cy="58" r="10" fill="#21279D"/>
          <circle cx="1150" cy="58" r="10" fill="#21279D"/>
          <circle cx="1250" cy="58" r="10" fill="#21279D"/>
        </svg>

      </div>
    </footer>
  );
};

export default Footer;