import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#0d1b2a', color: 'white', display: 'flex', gap: '1rem' }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/skills" style={linkStyle}>Skills</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default Navbar;
