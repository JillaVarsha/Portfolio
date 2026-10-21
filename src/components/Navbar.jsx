import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#0d1b2a',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0, 240, 255, 0.1)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          style={{
            position: 'relative',
            cursor: 'pointer',
            color: 'white',
            fontWeight: '500',
            fontSize: '1rem',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            padding: '0.2rem 0.4rem',
          }}
          activeClass="active"
          spy={true}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}

          {/* Glowing underline on hover */}
          <span
            style={{
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '2px',
              width: '100%',
              backgroundColor: '#00f0ff',
              transform: 'scaleX(0)',
              transformOrigin: 'right',
              transition: 'transform 0.3s ease',
            }}
            className="nav-underline"
          ></span>
        </Link>
      ))}

      {/* Inline CSS for hover effect */}
      <style>
        {`
          .nav-underline:hover {
            transform: scaleX(1) !important;
            transform-origin: left !important;
          }

          .active {
            color: #00f0ff !important;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
