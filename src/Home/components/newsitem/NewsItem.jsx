import React, { Component } from "react";
import "./newsitem.css";
export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL } = this.props;

    const imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };

    return (
      <div>
        <div className="news-card">
          <div className="news-card-image">
            <img
              style={imageStyle}
              src={
                !imageURL
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNky-tplTrxU0sSOgWtNDBvJPgtJHSJ4YRJtmw-_C2IlZLxfhkQ9I9ftgOg82tTVBfVtk&usqp=CAU"
                  : imageURL
              }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="news-card-body">
            <h6 className="news-card-title">{title}...</h6>
            <p className="news-card-text">
              {description}... 
              <a href={newsURL} className="read-more">
                 Read More.
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
