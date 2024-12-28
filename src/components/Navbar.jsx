import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <a href="#" className="logo">
        Nail Salon Happy
      </a>
      <div
        className={`bx bx-menu ${menuOpen ? "open" : ""}`}
        id="menu-icon"
        onClick={toggleMenu}
      >
        <BsList />
      </div>
      <ul className={`navbar ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#" onClick={handleMenuClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleMenuClick}>
            About
          </a>
        </li>
        <li>
          <a href="#menu" onClick={handleMenuClick}>
            Service
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleMenuClick}>
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
