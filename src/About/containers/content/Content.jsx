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
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Set this to false since we are using custom buttons
    pauseOnHover: false,
  };

  const slidesData = [
    {
      id: 1,
      title: "Our Mission",
      content:
        "At GreenatHeart, our mission is to transform the world into a greener, healthier place. We understand that not everyone can plant trees directly due to various constraints, yet they have a genuine desire to contribute positively. With the global decline in green cover and worsening air quality, our ecosystems and wildlife are at risk.   Recognizing the importance of trees in addressing these challenges, we aim to bridge the gap. By planting trees on behalf of those unable to do it themselves, we offer an opportunity for individuals to make a meaningful impact. Special occasions like birthdays, anniversaries, and life-changing events can now be celebrated by making a generous contribution towards a sustainable future.        Every tree planted is a step towards preserving our environment, benefiting not only the present but also leaving a legacy for future generations. Join us in this collective effort to create a greener, healthier planet for all.",
    },

    {
      id: 2,
      title: "Our Story",
      content:
        "Our journey began as college students participating in a Google Solutions Challenge aimed at addressing the UN's sustainability goals. Inspired by a collective desire to contribute to the well-being of our planet, we reflected on the support and resources the Earth has provided us throughout our lives.Acknowledging that humans are not the sole inhabitants of our planet, we realized the need to extend our gratitude and assistance to all life forms. Trees emerged as a powerful symbol of support for diverse ecosystems, playing a crucial role in sustaining life on Earth.Motivated by this understanding, we committed ourselves to the goal of 'Life on Land.' Trees, as the backbone of this mission, represent the best support system for fostering a harmonious coexistence among various life forms. Our initiative began as a humble acknowledgment of the Earth's contributions to us, evolving into a dedicated effort to give back and ensure a healthier future for all.",
    },
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
        </Slider>
      </div>
      <div className="about-slider-controls-phone">
        <div className="about-content-btn" aria-label="Previous slide">
          <button onClick={previous} type="button">
            <GrFormPrevious />
          </button>
        </div>
        <div className="about-content-btn" aria-label="Previous slide">
          <button onClick={next} type="button">
            <GrFormNext />
          </button>
        </div>
      </div>
      <div className="about-slider-controls">
        <div className="about-content-btn" aria-label="Previous slide">
          <button onClick={next} type="button">
            <GrFormNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
