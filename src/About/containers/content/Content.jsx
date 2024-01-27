import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./content.css";

const Content = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false, // Set this to false since we are using custom buttons
    pauseOnHover: false,
  };

  const slidesData = [
    {
      id: 1,
      title: "Our Mission",
      content: "This is the content for Our Mission.",
    },
    {
      id: 2,
      title: "Our Story",
      content: "This is the content for Our Story.",
    },
    // Add more slides here if needed
  ];

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="about-slider-container">
      <div className="about-slider-controls">
        <div className="about-content-btn" aria-label="Previous slide">
          <button onClick={previous} type="button">
            <GrFormPrevious />
          </button>
        </div>
      </div>
      <div className="about-slider">
      <Slider ref={sliderRef} {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="slide">
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
          </div>
        ))}
      </Slider></div>
      <div className="about-slider-controls">
        <div className="about-content-btn" aria-label="Previous slide">
          <button onClick={next} type="button">
            <GrFormNext/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
