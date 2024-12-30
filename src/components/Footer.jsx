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
            <li><a href="#about">About</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
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
        <p>&copy; 2024 Foodie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
