import React, { useState, useEffect, useRef } from "react";
import { BsList } from "react-icons/bs";
import { Search } from "@mui/icons-material"; // Import Material Search icon
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef(null); // Ref for the menu

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true); // Trigger closing animation
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false); // Reset closing state
      }, 300); // Matches the animation duration
    } else {
      setMenuOpen(true);
    }
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

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && event.target.id !== "menu-icon") {
        setClosing(true);
        setTimeout(() => {
          setMenuOpen(false);
          setClosing(false);
        }, 300);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header>
      <a href="#" className="logo">
        Nail Salon Happy
      </a>

      <div
        className={`navbar-toggle ${menuOpen ? "open" : ""}`}
        id="menu-icon"
        onClick={toggleMenu}
      >
        <BsList />
      </div>

      <ul ref={menuRef} className={`navbar ${menuOpen ? (closing ? "closing" : "open") : ""}`}>
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

      <li>
        <button className="book-now" onClick={handleMenuClick}>
          BOOK NOW
        </button>
      </li>
    </header>
  );
};

export default Navbar;