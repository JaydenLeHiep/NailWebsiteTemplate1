import React from "react";
import "../styles/Story.css";
import storyImage from "../assets/story_img.jpeg"; // Replace with your actual image path

const Story = () => {
  return (
    <section className="story-container">
      <div className="story-image">
        <img src={storyImage} alt="Our story" />
      </div>
      <div className="story-text">
        <h2>Our Story</h2>
        <p>
          At Nail Salon Happy, we started with a simple mission: to bring beauty 
          and confidence to our clients through professional and personalized nail care. 
          With years of experience and a passion for excellence, we have created a 
          welcoming space for our customers to relax and rejuvenate.
        </p>
      </div>
    </section>
  );
};

export default Story;
