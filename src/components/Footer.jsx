import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Donauzentrum (Top 64) Wagramer str.94</h3>
          <h4>Opening Hours</h4>
          <p>Monday to Friday: 9:00 a.m. - 8:00 p.m.</p>
          <p>Saturday: 9:00 a.m. - 6:00 p.m.</p>
          <h4>Contact</h4>
          <p>🏠 Address: Donauzentrum (Top 64), Wagramer str.94, 1220 Vienna</p>
          <p>📞 Phone: +436606788034</p>
          <p>📧 Email: info@naminail.at</p>
        </div>
        <div className="footer-right">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000.00000!2d16.00000!3d48.00000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d077d3cf06f5b%3A0x0000000000000000!2sDonauzentrum!5e0!3m2!1sen!2sat!4v00000000000"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright Nami Nail & Beauty 2024 &nbsp;&nbsp; | &nbsp;&nbsp;
          <a href="#privacy-policy">privacy policy</a> &nbsp;&nbsp; | &nbsp;&nbsp;
          <a href="#terms-conditions">AGB - General Terms and Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;