import React, { useState, useEffect } from 'react';
import arrowback from "../Asset/arrow_back.png"
import arrowfrowed from "../Asset/arrow_forward.png"

const AutoPlaySlider = ({ slides, autoPlayInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle next and previous slide change manually
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoPlayInterval);

    // Cleanup the interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentSlide, autoPlayInterval]);

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
            style={{
              display: index === currentSlide ? 'block' : 'none', // Hide inactive slides
            }}
          >
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <button className="prev-btn" onClick={prevSlide}><img src={arrowback} alt=""  style={{height:"25px",width:"25px"}}/></button>
      <button className="next-btn" onClick={nextSlide}><img src={arrowfrowed} alt="" style={{height:"25px",width:"25px"}} /></button>

      <style jsx>{`
        .slider-container {
          position: relative;
          width: 100vw;
          
          margin: auto;
          overflow: hidden;
        }

        .slider {
          display: flex;
          position: relative;
          width: 100%;
        }

        .slide {
          min-width: 100%;
          transition: opacity 0.5s ease-in-out;
          opacity: 0;
        }

        .slide.active {
          opacity: 1;
        }

        img {
          width: 100%;
          object-fit: cover;
        }

        .prev-btn, .next-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }

        .prev-btn {
          left: 10px;
        }

        .next-btn {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default AutoPlaySlider;
