import React, { useState, useEffect, useCallback } from 'react';
import arrowback from "../Asset/arrow_back.png";
import arrowfrowed from "../Asset/arrow_forward.png";

const AutoPlaySlider = ({ slides, autoPlayInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(slideInterval);
  }, [nextSlide, autoPlayInterval]);

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
            style={{
              display: index === currentSlide ? 'block' : 'none',
            }}
          >
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <button className="prev-btn" onClick={prevSlide}>
        <img src={arrowback} alt="" style={{ height: "25px", width: "25px" }} />
      </button>
      <button className="next-btn" onClick={nextSlide}>
        <img src={arrowfrowed} alt="" style={{ height: "25px", width: "25px" }} />
      </button>

      <style>{`
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
          height: 331px;
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
