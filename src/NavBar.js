import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./logo/logo.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={logo} alt="GDSC Logo" className="logo" />
      </Link>

      <button 
        className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/events" onClick={closeMenu}>Events</Link>
        <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link to="/code-clash" onClick={closeMenu}>CodeClash</Link>
        <Link to="/join" onClick={closeMenu}>Join</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
      </div>
    </nav>
  );
}

export default NavBar;
