import React from 'react';
import "./navbar.css"

const Navbar = () => (
    <nav className="navbar">
        <h1>URMAKER VYBZ</h1>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <a href="/">HJEM</a>
        </li>
        <li className="navbar__menu-item">
          <a href="/watches">KLOKKER</a>
        </li>
        <li className="navbar__menu-item">
          <a href="/brands">SERVICE</a>
        </li>
        <li className="navbar__menu-item">
          <a href="/contact">OM OSS</a>
        </li>
      </ul>
    </nav>
  );
  
  export default Navbar;