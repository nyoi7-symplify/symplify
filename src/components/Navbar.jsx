// Navbar.js

import React from 'react';
import logo from '/src/files/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
     <img className='logo' src={logo}></img>

      </div>
      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="#">Home</a>
        </li>
        <li className="navbar-link">
          <a href="#">About</a>
        </li>
        <li className="navbar-link">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
// adding some comments here to show where the navbar is displayed
export default Navbar;
