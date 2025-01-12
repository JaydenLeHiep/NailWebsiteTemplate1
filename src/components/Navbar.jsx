import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { Search } from "@mui/icons-material"; // Import Material Search icon
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
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
          <a href="#price-list" onClick={handleMenuClick}>
            PRICE LIST
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleMenuClick}>
            OUR SERVICES
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleMenuClick}>
            ABOUT US
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleMenuClick}>
            CONTACT
          </a>
        </li>
        <li>
          <a href="#work" onClick={handleMenuClick}>
            WORK
          </a>
        </li>
        <li>
          <button className="book-now" onClick={handleMenuClick}>
            BOOK NOW
          </button>
        </li>
        <li className="search-bar">
          <form onSubmit={handleSearchClick}>
            <div className="search-container">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
              <button type="submit" className="search-icon">
                <Search />
              </button>
            </div>
          </form>
        </li>
        <li className="language">
          <select>
            <option value="de">German</option>
            <option value="en">English</option>
          </select>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;