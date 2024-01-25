import React from "react";
import "./home.css";

import { Header, Banner, Gallery, News } from "./containers";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <News />
      <Banner />
      <Gallery />
    </div>
  );
};

export default Home;
