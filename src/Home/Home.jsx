import React, { useEffect } from "react";
import "./home.css";
import { FaArrowRight } from "react-icons/fa6";

import { Header, Banner, Gallery, News } from "./containers";

const Home = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = "GreenAtHeart";

    // Optionally, reset the title when the component unmounts
    return () => {
      document.title = "GreenAtHeart";
    };
  }, []);
  return (
    <div className="home">
      <Header />

      <div className="home-tagline">
        <h2>
          Join us in our mission to cultivate a greener tomorrow. Every tree we
          plant is a step towards a sustainable and resilient future
        </h2>
      </div>

      <Gallery />

      <div className="home-raised">
        <h2>
          We've raised <span>$0</span> to plant <span>0 </span> trees
        </h2>
        <button><a href="/donate">Donate Now <FaArrowRight /></a></button>
      </div>

      <Banner />
      <div className="home-mission">
        <h2>
          Each sapling we plant is a promise for a brighter, healthier planet.
          We've witnessed firsthand the positive impact our tree-planting
          initiatives have on the environment and communities. Today, we invite
          you to be a crucial part of this movement by making a donation.
        </h2>
        <button><a href="/donate">Donate Now <FaArrowRight /></a></button>
      </div>
      <News />
    </div>
  );
};

export default Home;
