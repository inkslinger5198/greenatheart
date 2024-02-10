import React, {useEffect} from "react";
import "./donate.css";

import { Picture, ProgressBar, Steps } from "./containers";
const Donate = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'Donate | GreenAtHeart';
    
    // Optionally, reset the title when the component unmounts
    return () => {
      document.title = 'GreenAtHeart';
    };
  }, []);
  return (
    <div className="donate">
      <Picture />
      <ProgressBar />
    </div>
  );
};

export default Donate;
