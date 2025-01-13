import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Donauzentrum (Top xx) Test str.100</h3>
          <h4>Opening Hours</h4>
          <p>Monday to Friday: 9:00 a.m. - 8:00 p.m.</p>
          <p>Saturday: 9:00 a.m. - 6:00 p.m.</p>
          <h4>Contact</h4>
          <p>🏠 Address: Donauzentrum (Top xx), Test str.94, 1220 Vienna</p>
          <p>📞 Phone: +43660 xxx xxxx</p>
          <p>📧 Email: info@happynail.at</p>
        </div>
        <div className="footer-right">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10683.594429348762!2d16.4359856!3d48.2421889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d077d3cf06f5b%3A0x6d35a4c464db69ec!2sDonau%20Zentrum!5e0!3m2!1sen!2sat!4v1615825228509!5m2!1sen!2sat"
            width="100%"
            height="450"
            className="map-frame"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright Happy Nail & Beauty 2024 &nbsp;&nbsp; | &nbsp;&nbsp;
          <a href="#privacy-policy">privacy policy</a> &nbsp;&nbsp; | &nbsp;&nbsp;
          <a href="#terms-conditions">AGB - General Terms and Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;