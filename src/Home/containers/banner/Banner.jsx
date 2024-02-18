import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./banner.css";
import img1 from "../../assets/Gallery/8.jpg";
import img2 from "../../assets/Gallery/15.jpg";
import img3 from "../../assets/Gallery/4.jpg";
import img4 from "../../assets/Gallery/5.jpg";

const Banner = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle card click
  const handleCardClick = (path) => {
    if (path.startsWith("http")) {
      // For external links, open in a new tab
      window.open(path, "_blank");
    } else {
      // For internal links, use navigate
      navigate(path);
    }
  };

  return (
    <div className="Banner">
      <div className="Banner-header">
        <h1>Get Involved</h1>
      </div>
      <div className="Banner-container">
        {[
          {
            text: "Donate Now",
            title: "Donate",
            subhead: "Seeds of change, watered by your generosity",
            img: img1,
            actionText: "Donate Now",
            link: "/donate",
          },
          {
            text: "Become a Member",
            title: "Become a Member",
            subhead:
              "Join our organisation to become a greenheart and help increase our world's lifeline. ",
            img: img3,
            actionText: "Become a Member",
            link: "/member",
          },
          {
            text: "Get a plant recommendation",
            title: "Flora",
            subhead:
              "Want to plant a tree yourself? Are you confused about what to plant? Try out our plant recommendation system",
            img: img4,
            actionText: "Volunteer",
            link: "",
          },
          {
            text: "Socials",
            title: "Check out our socials",
            subhead:
              "Follow us on our socials for regular updates and be part of the Greenheart community.",
            img: img2,
            actionText: "Socials",
            link: "https://instagram.com",
          },
        ].map((card, index) => (
          <div
            className="Banner-card"
            key={index}
            onClick={() => handleCardClick(card.link)}
          >
            <h2>{card.title}</h2>
            {card.title === "Flora" && (
              <div className="under-development-tag">UNDER DEVELOPMENT</div>
            )}
            <p className="Banner-card-body">{card.subhead}</p>
            <img src={card.img} alt={`Banner ${index + 1}`} />
            <button>{card.actionText}</button>
            <div className="card-overlay">
              <span>{card.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
