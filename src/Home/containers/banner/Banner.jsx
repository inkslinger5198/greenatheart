import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './banner.css';
import img1 from '../../assets/Gallery/8.jpg';
import img2 from '../../assets/Gallery/15.jpg';
import img3 from '../../assets/Gallery/4.jpg';

const Banner = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle card click
  const handleCardClick = (path) => {
    if (path.startsWith('http')) {
      // For external links, open in a new tab
      window.open(path, '_blank');
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
          { text: "Donate Now", img: img1, actionText: "Donate Now", link: '/donate' },
          { text: "Become a Member", img: img3, actionText: "Become a Member", link: '/member' },
          { text: "Socials", img: img2, actionText: "Socials", link: 'https://instagram.com' }, 
        ].map((card, index) => (
          <div className="Banner-card" key={index} onClick={() => handleCardClick(card.link)}>
            <h2>Lorem Ipsum Dolor Sit Amed</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
            <img src={card.img} alt={`Banner ${index + 1}`} />
            <button>{card.actionText}</button>
            <div className="card-overlay"><span>{card.text}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
