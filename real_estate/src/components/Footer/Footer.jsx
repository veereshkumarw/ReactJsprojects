import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
   <section className="f-wrapper">

    <div className="paddings innerWidth flexCenter f-container">

        {/* left side of footer */}
        <div className="flexColStart f-left-side">
            <img src="./logo2.png" alt="logo" width={120} />
            <span className='secondaryText'>
                Our Vision is to Make provide <br />
                The Best Possible Resendencies to Your Life
            </span>
        </div>

        {/* /right of side of footer */}

        <div className="flexColStart f-right-side">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'> #260 Harry Place, Charlotte, 
              <br /> North Carolina, United States </span>
            
            <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About Us</span>
            </div>
        </div>

    </div>
   </section>
  )
}

export default Footer
