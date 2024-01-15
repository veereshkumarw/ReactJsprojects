import React from 'react';
import "./Hero.css";
import Portfolio1 from "../Assets/Portfolio1.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='mask'>
       <img className='first-img' src={Portfolio1} alt="first-img"/>
      </div>
      <div className='content'>
        <p>Hi, I'm a Front-end developer</p>
        <h1>React Developer</h1>
        <Link to='/project' className='btn'>Projects</Link>
        <Link to='/contact' className='btn btn-light'>Contact</Link>
      </div>
    
      
    </div>
  )
}

export default Hero
