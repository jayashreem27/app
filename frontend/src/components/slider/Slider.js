import React, { useEffect, useState, useRef, useCallback } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Slider-data";
import { useNavigate } from "react-router-dom";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const slideLength = sliderData.length;
  const autoScroll = true;
  const slideInterval = useRef(null);
  const intervalTime = 5000;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === slideLength - 1 ? 0 : prevSlide + 1));
  }, [slideLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slideLength - 1 : prevSlide - 1));
  }, [slideLength]);

  useEffect(() => {
    setCurrentSlide(0);

    const auto = () => {
      slideInterval.current = setInterval(nextSlide, intervalTime);
    };

    if (autoScroll) {
      auto();
    }

    return () => clearInterval(slideInterval.current);
  }, [autoScroll, intervalTime, nextSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;

        return (
          <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <button className="--btn --btn-primary" onClick={() => navigate("/shop")}>
                    Shop Now
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
