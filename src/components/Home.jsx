import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // Phone icon
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Instagram icon
import "../styles/Home.css";
import TestImage from "../assets/Test1.webp";

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Image */}
      <div className="home-background"></div>

      {/* Content */}
      <div className="home-content">
        {/* Left Side - Image */}
        <div className="home-left">
          <img
            src={TestImage}
            alt="Nail Studio"
            className="home-image"
          />
        </div>

        {/* Right Side - Introduction Text */}
        <div className="home-right">
          <h1>Your beauty studio in Vienna</h1>
          <p>
            We prioritize your needs by providing meticulous care and artistic
            designs. Our commitment stems from a deep passion for this craft
            and guarantees an unforgettable experience.
          </p>
          <div className="home-buttons">
            <button className="home-button">OUR SERVICES</button>
            <button className="home-button">BOOK NOW</button>
          </div>

          {/* Footer Section */}
          <div className="home-footer">
            <div className="contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <div>
                  <p>For more information call us</p>
                  <strong>+43xxxxxxxxxxx</strong>
                </div>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
                <div>
                  <p>For more information call us</p>
                  <strong>Instagram: Test.nailsandbeauty</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;