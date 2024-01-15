import React from 'react';
import Navbar from "../Componenet/Navbar";
import Footer from "../Componenet/Footer";
import Hero1 from '../Componenet/Hero1';
import AboutInfo from '../Componenet/AboutInfo';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading="About" text="I'm a Front-End Developer"/>
      <AboutInfo/>
      <Footer/>
    </div>
  )
}

export default About
