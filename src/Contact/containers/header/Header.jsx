import React from "react";
import "./header.css";

import img from "../../assets/pexels-eberhard-grossgasteiger-2310641.jpg";
import { Contact_form } from "../../components";

const Header = () => {
  return (
    <div className="contact_header">
      <div className="contact_header-img">
        <img src={img} alt="water" />
      </div>
      <div className="contact-overlay"></div>
      <div className="contact_header-text">
        <div className="contact_header-left">
          <h1>Contact Us</h1>
          <p>Reach Out, Let's Make a Difference Together.</p>
        </div>
        <div className="contact_header-form">
          <div className="contact_header-content">
            <p>We are excited to hear from you!</p>
          </div>
          <Contact_form />
        </div>
      </div>
    </div>
  );
};

export default Header;
