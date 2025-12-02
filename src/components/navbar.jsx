import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">FOOD ATLAS</Link>
      </div>
      <div className="navbar-links">
        <Link to="/recettes" className="nav-link">RECETTES</Link>
        <Link to="/contact" className="nav-link">CONTACT</Link>
        <Link to="/AdminRec.jsx" className="nav-link admin-btn">
          ADMIN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;