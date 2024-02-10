import React, {useEffect} from "react";
import "./blog.css";

import { Articles, Header } from "./containers";

const Blog = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'Blog | GreenAtHeart';
    
    // Optionally, reset the title when the component unmounts
    return () => {
      document.title = 'GreenAtHeart';
    };
  }, []);
  
  return (
    <div>
      <Header />
      <Articles />
    </div>
  );
};

export default Blog;
