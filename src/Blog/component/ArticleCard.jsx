import React from "react";
import "./articlecard.css";

function ArticleCard({ post, extractFirstImageSrc, onOpenPost }) {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  return (
    <div className="articleCard">
      <div className="article-card-image">
        <img
          style={imageStyle}
          src={
            !extractFirstImageSrc(post.content)
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNky-tplTrxU0sSOgWtNDBvJPgtJHSJ4YRJtmw-_C2IlZLxfhkQ9I9ftgOg82tTVBfVtk&usqp=CAU"
              : extractFirstImageSrc(post.content)
          }
          alt={post.title}
        />
      </div>
      <div className="article-card-body">
        <h2>{post.title}</h2>
        <div className="article-card-text">
          <p>
            {post.content.replace(/(&nbsp;|<[^>]*>?)/gm, "").substring(0, 100) +
              "... "}
              <a onClick={onOpenPost} className="read-more">Read More.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
