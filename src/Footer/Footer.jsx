import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>
          <span className="Green">Green</span>
          <span className="white">At</span>
          <span className="red">Heart</span>
        </h1>
      </div>
      <div className="footer-links">
        <div className="socials">
          <div className="org-links">
            <h3>Socials</h3>
            <div className="Linkedin">
              <a href="#">Linkedin</a>
            </div>
            <div className="Instagram">
              <a href="#">Instagram</a>
            </div>
            <div className="Twitter">
              <a href="#">Twitter</a>
            </div>
          </div>

          <div className="founder-links">
            <h3>Founders</h3>
            <div className="Pranavi">
              <a href="#">Pranavi J</a>
            </div>
            <div className="Pulkita">
              <a href="#">Pulkita R</a>
            </div>
        </div>
        </div>

        <div className="navigate">
          <h3>Navigate</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/member">Join Now</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
