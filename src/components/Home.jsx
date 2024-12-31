import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Nail Salon Happy</h1>
      <div className="home-buttons">
        <button className="home-button">Termin Vereinbaren</button>
        <button className="home-button">Preisliste</button>
      </div>
    </div>
  );
};

export default Home;
