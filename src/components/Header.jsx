import React from 'react';
import '../styles/Header.css';
// import logo from '../assets/nami-logo.svg'; // Importing logo image

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* <img src={logo} alt="NAMI Nails & Beauty Logo" className="logo" /> */}
      </div>

      <nav className="nav-links">
        <ul>
          <li><a href="#price-list">PRICE LIST</a></li>
          <li><a href="#services">OUR SERVICES</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="#work">WORK</a></li>
        </ul>
      </nav>

      <div className="header-actions">
        <select className="language-selector">
          <option value="de">German</option>
          <option value="en">English</option>
        </select>
        <button className="book-now">BOOK NOW</button>
        <button className="search-icon">
          <img src="/assets/search-icon.svg" alt="Search" />
        </button>
      </div>
    </header>
  );
};

export default Header;