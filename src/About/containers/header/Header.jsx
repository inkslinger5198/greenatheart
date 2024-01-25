// Header.js
import React from "react";
import "./header.css";
import img from "../../Assets/grass.jpg";

const Header = () => {
  return (
    <div className="about_header">
      <div className="about_header-img">
        <img src={img} alt="trees" />
        <div className="overlay"></div>
        <div className="about_header-text">
          <h1>About Us</h1>
          <p>In Every Seed, Our Story Takes Root</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
