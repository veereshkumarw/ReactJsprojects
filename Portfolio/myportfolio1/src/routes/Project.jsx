import React from 'react';
import Navbar from "../Componenet/Navbar";
import Footer from "../Componenet/Footer";
import Hero1 from '../Componenet/Hero1';
import Work from '../Componenet/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading="Projects" text="The Projects Done by Me"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
