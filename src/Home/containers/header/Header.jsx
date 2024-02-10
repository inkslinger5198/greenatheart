import React from "react";
import "./header.css";
import img from "../../assets/pexels-valentin-s-589802.jpg";
const Header = () => {
  return (
    <div className="home_header">
      <div class="home_header-img">
        <img src={img} alt="trees"></img>
        <div class="home-overlay"></div>
        <div className="home_header-text">
        <h1>Green At Heart</h1>
        <p>Our Mission is to Plant trees all around the world</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
