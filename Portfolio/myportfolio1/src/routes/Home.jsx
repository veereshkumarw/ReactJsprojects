import React from 'react';
import Navbar from '../Componenet/Navbar';
import Hero from '../Componenet/Hero';
import Footer from '../Componenet/Footer';
import Work from "../Componenet/Work";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default Home;
