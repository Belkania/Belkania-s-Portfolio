import React, { useState, useEffect } from "react";
import "./ImagesSlider.css";
import pic1 from "./img/pic1.jpg";
import pic2 from "./img//pic2.jpg";
import pic3 from "./img//gioP.jpg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [pic1, pic2, pic3];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default ImageSlider;
