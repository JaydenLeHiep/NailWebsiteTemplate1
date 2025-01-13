import React from "react";
import "../styles/InstagramFollow.css";
import Image1 from "../assets/Instagram1.webp";
import Image2 from "../assets/Instagram2.webp";
import Image3 from "../assets/Instagram3.webp";
import Image4 from "../assets/Instagram4.webp";

const InstagramFollow = () => {
  const leftImages = [Image1, Image2];
  const rightImages = [Image3, Image4];

  return (
    <div className="instagram-follow-container">
      {/* Left Images */}
      <div className="instagram-images left">
        {leftImages.map((image, index) => (
          <img
            key={`left-${index}`}
            src={image}
            alt={`Instagram post ${index + 1}`}
            className="instagram-image"
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="instagram-text">
        <h1>Follow us on Instagram</h1>
        <button className="instagram-button">OUR INSTAGRAM</button>
      </div>

      {/* Right Images */}
      <div className="instagram-images right">
        {rightImages.map((image, index) => (
          <img
            key={`right-${index}`}
            src={image}
            alt={`Instagram post ${index + 1}`}
            className="instagram-image"
          />
        ))}
      </div>
    </div>
  );
};

export default InstagramFollow;