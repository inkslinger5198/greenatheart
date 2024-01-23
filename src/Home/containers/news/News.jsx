import React from "react";
import "./news.css";
import img1 from "../../assets/Gallery/8.jpg";
import img2 from "../../assets/Gallery/15.jpg";
import img3 from "../../assets/Gallery/4.jpg";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const News = () => {
  return (
    <div className="news">
      <div className="news-heading">
        <h1>Latest News</h1>
      </div>

      <div className="news-container">
        <MdKeyboardDoubleArrowLeft className="arrow" />
        <div className="news-card">
          <h4>24 May</h4>
          <h2>Lorem Ipsum Dolor Sit Amed</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
          <img src={img1} alt="news" />
          <button>Read More</button>
        </div>
        <div className="news-card">
          <h4>25 Oct</h4>
          <h2>Lorem Ipsum Dolor Sit Amed</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
          <img src={img3} alt="news" />
          <button>Read More</button>
        </div>
        <div className="news-card">
          <h4>28 Feb</h4>
          <h2>Lorem Ipsum Dolor Sit Amed</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
          <img src={img2} alt="news" />
          <button>Read More</button>
        </div>
        <MdKeyboardDoubleArrowRight className="arrow" />
      </div>
    </div>
  );
};

export default News;
