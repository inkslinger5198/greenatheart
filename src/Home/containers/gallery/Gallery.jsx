import React from "react";
import "./gallery.css";
import img9 from "../../assets/Gallery/9.jpg";
import img10 from "../../assets/Gallery/10.jpg";
import img11 from "../../assets/Gallery/11.jpg";
import img12 from "../../assets/Gallery/12.jpg";
import img13 from "../../assets/Gallery/13.jpg";
import img14 from "../../assets/Gallery/14.jpg";
import img15 from "../../assets/Gallery/15.jpg";
import img16 from "../../assets/Gallery/16.jpg";

const Gallery = () => {
  return (
    <div className="home_gallery">
      <div className="home_gallery-title">
        <h1>Gallery</h1>
      </div>
      <div className="home_gallery-images">
        <div className="grid-wrapper">
          <div>
            <img src={img9} alt="gallery" />
          </div>

          <div className="tall">
            <img src={img10} alt="gallery" />
          </div>

          <div>
            <img src={img11} alt="gallery" />
          </div>

          <div>
            <img src={img12} alt="gallery" />
          </div>

          <div>
            <img src={img13} alt="gallery" />
          </div>

          <div>
            <img src={img14} alt="gallery" />
          </div>

          <div className="wide">
            <img src={img15} alt="gallery" />
          </div>

          <div>
            <img src={img16} alt="gallery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
