import { Link } from "react-router-dom";
import "./AboutInfo.css";
import React from 'react';
import reactimg from "../Assets/about-reactjs.avif";
import javasImg from "../Assets/about-javas.jpg";

const AboutInfo = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a React front-end Developer. 
                I develop websites using HTML, CSS and Javascript.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        {/* -------------------right---------------- */}

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={reactimg} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={javasImg} className="img" alt="true" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutInfo;
