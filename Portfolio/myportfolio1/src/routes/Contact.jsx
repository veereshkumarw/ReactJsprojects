import React from 'react';
import Navbar from "../Componenet/Navbar";
import Footer from "../Componenet/Footer";
import Hero1 from "../Componenet/Hero1";
import Form from "../Componenet/Form";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading="Contact Me" text="I'm a Front-End Developer"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;
