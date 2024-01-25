import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="nav-lap">
          <nav>
            <ul>
              <li>
                <Link to="/greenatheart">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
              <li>
                <Link to="/member">Join Now</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="nav-mob">
          {toggleMenu ? (
            <IoMdClose
              className="menu-open"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <BiMenuAltLeft
              className="menu-close"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="phone-container scale-up-center">
              <div className="phone-container-links">
                <nav>
                  <ul>
                    <li>
                      <Link to="/greenatheart" onClick={() => setToggleMenu(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={() => setToggleMenu(false)}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/donate" onClick={() => setToggleMenu(false)}>
                        Donate
                      </Link>
                    </li>
                    <li>
                      <Link to="/member" onClick={() => setToggleMenu(false)}>
                        Join Now
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" onClick={() => setToggleMenu(false)}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={() => setToggleMenu(false)}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-logo">
        <h1>
          <span className="Green">Green</span>
          <span className="white">At</span>
          <span className="red">Heart</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
