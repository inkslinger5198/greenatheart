import React from "react";
import "./header.css";

import img from "../../assets/pexels-ian-turnell-709552.jpg";
import { Member_form } from "Member/component";

const Header = () => {
  return (
    <div className="member_header">
      <div className="member_header-img">
        <img src={img} alt="water" />
      </div>
      <div className="overlay"></div>
      <div className=" member_header-text contact_header-text">
        <div className="contact_header-left">
          <h1>Join Now</h1>
          <p>Help Us Grow More Trees..</p>
        </div>
        <div className="contact_header-form">
          <div className="contact_header-content">
            <p>Become a GreenHeart!</p>
          </div>
          <Member_form />
        </div>
      </div>
    </div>
  );
};

export default Header;
