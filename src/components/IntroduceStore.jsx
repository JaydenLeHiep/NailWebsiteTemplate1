import React, { useState, useEffect } from "react";
import "../styles/IntroduceStore.css";
import Image1 from "../assets/Test2.webp";
import Image2 from "../assets/Test3.webp";
import Image3 from "../assets/Test4.webp";
import Background from "../assets/Background.webp";

const IntroduceStore = () => {
    const images = [Image1, Image2, Image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="introduce-store-container">
            {/* Swap the order of Carousel and Text */}
            <div className="store-text">
                <h1>Luxurious ambience, a spacious</h1>
                <div className="underline"></div>
                <p>
                    At Our Nails & Beauty, our customers, whether they are first-timers
                    or beloved regulars, are guaranteed a pleasant experience as well as
                    service and pampering.
                </p>
                <button className="about-button">ABOUT US</button>
            </div>
            <div className="store-carousel">
                <div className="carousel">
                    <img
                        src={images[currentImageIndex]}
                        alt={`Carousel ${currentImageIndex + 1}`}
                        className="carousel-image"
                    />
                </div>
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentImageIndex ? "active" : ""}`}
                            onClick={() => setCurrentImageIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IntroduceStore;