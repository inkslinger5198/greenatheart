import React from "react";
import "./picture.css";

import { PaymentGateway } from "../../components";

import img from "../../assets/pexels-pixabay-33109.jpg";
const Picture = () => {
  return (
    <div className="donate_picture">
      <div className="donate_picture-img">
        <img src={img} alt="autumn" />
        <div className="overlay"></div>
        <div className="donate_picture-text">
          <div className="donate_picture-content">
            <h1>Donate</h1>
            <p>Help us to grow more trees</p>
          </div>
          <div className="donate_picture-gateway">
            <PaymentGateway />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picture;
