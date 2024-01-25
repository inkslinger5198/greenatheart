import React, { Component } from "react";

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
        <div className="card" style={{ width: "18rem", marginBottom:"1rem", height:"26rem"}}>
          <div className="card-image" style={{ height: "12rem" }}>
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
          <div className="card-body">
            <h6 className="card-title">{title}...</h6>
            <p className="card-text">{description}...</p>
            <a href={newsURL} className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
