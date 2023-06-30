// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/binary" className="navbar-link">
        Binary Converter
      </Link>
    </nav>
  );
};

export default Navbar;
