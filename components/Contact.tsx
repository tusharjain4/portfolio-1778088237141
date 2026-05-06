'use client';

import React from 'react';

interface ContactProps {
  email: string;
}

const Contact: React.FC<ContactProps> = ({ email }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="footer-section"> {/* Reusing footer styles for contact section structure */}
      <div className="footer-content">
        <div className="footer-top">
          <p className="footer-copyright">Let&apos;s Connect!</p>
          <button className="contact-email-button" onClick={handleEmailClick}>
            {email}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;