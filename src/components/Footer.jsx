import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#007bff', // Blue color
    color: 'white',
    textAlign: 'center',
    padding: '15px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease', // Smooth transition for hover effect
  };

  const hoverStyle = {
    color: '#ffcc00', // Gold color on hover
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, hoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyle);
  };

  const heartStyle = {
    color: 'red', // Red color for the heart icon
  };

  return (
    <footer style={footerStyle}>
      <p>
        Built with <span style={heartStyle}>&#9825;</span> by{' '}
        <a
          href="https://www.instagram.com/davidarmah992/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          David Nii Armah
        </a>
      </p>
    </footer>
  );
};

export default Footer;
