import React from 'react';
import "./Footer.css";
import { FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-container'>

            <div className='left'>
               <div className='location'>
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>123 Web developer</p>
                    <p>India</p>
                </div>
               </div>
               <div className='phone'>
                  <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                  +91 123456779</h4>
               </div>
               <div className='email'>
                  <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                  info@vk.com</h4>
               </div>
            </div>

            <div className='right'>
              
                  <h4>About Me</h4>
                  <p>I'm well keen into web development </p>
                   <div className='social-icons'>
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaLinkedinIn size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                   </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
