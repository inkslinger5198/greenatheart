import React, {useEffect} from "react";
import "./about.css";

import { Founders, Content, Header, FAQ } from "./containers";
const About = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'About | GreenAtHeart';
    
    // Optionally, reset the title when the component unmounts
    return () => {
      document.title = 'GreenAtHeart';
    };
  }, []);
  return (
    <div>
      <Header />
      <Content />
      <Founders />
      <FAQ />
    </div>
  );
};

export default About;
