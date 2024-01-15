import "./Navbar.css";
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

// bars is icon and Fa is category

const Navbar = () => {

  // for menu icon and cancel icon
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //for navbar to have bg-color when scrolled down
  const[color, setColor] = useState(false);
  
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }else setColor(false);
  };

  window.addEventListener("scroll",changeColor);

  return (
    <div className={color? "header header-bg":"header"}>
      <Link to="/">
        <h1>MyPortfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" :
                       "nav-menu"}>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/project">
            Project
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
      </ul>

      <div className="hamburgerMenu" onClick={handleClick}>
        {
        click ? (<FaTimes size={20} color="white"/>)
        :
        (<FaBars size={20} color="white"/>)
        }
        
        
      </div>
    </div>
  );
};

export default Navbar;
