import React from "react";
import "./header.css";

import img from "../../assets/pexels-skyler-ewing-7133215.jpg";
const Header = () => {
  return (
    <div className="blog_header">
      <div className="blog_header-img">
        <img src={img} alt="water" />
      </div>
      <div className="blog-overlay"></div>
      <div className="blog_header-text">
        <h1>Blog</h1>
        <p>Illuminating Paths to a Better World, One Story at a Time.</p>
      </div>
    </div>
  );
};

export default Header;
