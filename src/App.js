// App.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Donate from "./Donate/Donate";
import Member from "./Member/Member";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const App = () => (
  <div className="App">
    <Navbar />


    <Routes>
      <Route path="/greenatheart" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/member" element={<Member />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <Footer />
  </div>
);

export default App;
