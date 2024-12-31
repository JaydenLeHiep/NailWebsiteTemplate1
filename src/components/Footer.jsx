import React from "react";
import { BsGithub, BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Menu Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Unsere Geschichte</a></li>
            <li><a href="#service">Preisliste</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com"><BsFacebook /></a>
            <a href="https://www.instagram.com"><BsInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Nail Salon Happy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
