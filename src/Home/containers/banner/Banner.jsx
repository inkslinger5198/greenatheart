import React from "react";
import "./banner.css";
import { PiPottedPlantBold } from "react-icons/pi";
const Banner = () => {
  return (
    <div className="home_banner">
      <div className="home_banner-title">
        <div>
          <h1>Plant a Tree</h1>
        </div>
        <div>
          <PiPottedPlantBold className="plant-icon" />
        </div>
      </div>

      <div className="home_banner-CTA">
        <div className="home_banner-CTA-card">
          <h2>Plant a Tree</h2>
          <p>
            Plant a tree to create a better future. This is a placeholder, cause
            I have no idea what to write here.
          </p>
          <button>Donate Now</button>
        </div>

        <div className="home_banner-CTA-card">
          <h2>Become a Member</h2>
          <p>
            Join our community to help us plant more trees.I have no idea what
            to write here.
          </p>
          <button>Join Now</button>
        </div>

        <div className="home_banner-CTA-card">
          <h2>Spread the word</h2>
          <p>
            Spread the word about our cause to help us reach more people.I have
            no idea what to write here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
