import React from "react";
import "./founders.css";
import Founder1 from "../../Assets/Pranavi.jpg";
import Founder2 from "../../Assets/Pulkita.jpg";

const Founders = () => {
  return (
    <div className="about_founders section__padding">
      <div className="about_contact-header">
        <h1>OUR FOUNDERS</h1>
      </div>
      <div className="about_card-grid">
        <a className="about_card-contact" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pranavi-j/">
          <div
            className="about_card-background"
            style={{ backgroundImage: `url(${Founder1})` }}
          ></div>
          <div className="about_card-content">
            
            <p className="about_card-category">FOUNDER</p>
            <h3 className="about_card-heading">PRANAVI</h3>
          </div>
        </a>

        <a className="about_card-contact" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pulkita01">
          <div
            className="about_card-background"
            style={{ backgroundImage: `url(${Founder2})` }}
          ></div>
          <div className="about_card-content">
            
            <p className="about_card-category">FOUNDER</p>
            <h3 className="about_card-heading">PULKITA</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Founders;
