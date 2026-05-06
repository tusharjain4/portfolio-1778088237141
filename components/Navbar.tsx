'use client';

import React from 'react';

interface NavbarProps {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo-text">{initials}</h1>
          <div className="logo-divider"></div>
          <a href="#" aria-label="Home">
            {/* Using a simple SVG placeholder for logo icon */}
            <svg className="logo-icon" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 0L0 7V21L13 28L26 21V7L13 0Z" fill="#21279D"/>
              <path d="M13 4.67L4.67 9.33V18.67L13 23.33L21.33 18.67V9.33L13 4.67Z" fill="white"/>
            </svg>
          </a>
        </div>
        <button className="hamburger" aria-label="Menu">☰</button>
        <nav className="nav-menu" role="menubar">
          <button role="menuitem">Home</button>
          <button role="menuitem">Work</button>
          <button role="menuitem">About</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;