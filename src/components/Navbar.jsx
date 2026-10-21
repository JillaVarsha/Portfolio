import React, { useState } from 'react';
import { Link } from 'react-scroll';

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}>
      <button
        className="site-nav__toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-nav-links"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className="site-nav__links" id="site-nav-links">
        {sections.map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="site-nav__link"
            activeClass="active"
            spy={true}
            offset={-68}
            onClick={() => setMenuOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span className="nav-underline" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
