// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Donate from "./Donate/Donate";
import Member from "./Member/Member";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import { Spinner } from "./component/Spinner";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Spinner size={150} loading={loading} />
      ) : (
        <div className="component">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/greenatheart" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/member" element={<Member />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
