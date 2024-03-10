import React from 'react';
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';


const Hero = () => {
    return(
        <section className="hero-wrapper">

            <div className="flexCenter paddings innerWidth hero-container">
                
                {/* -------left side------------ */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <h1>
                            Discover <br/> 
                            Most Suitable <br/>
                            Property
                        </h1>
                    </div>
                    <div className="flexColStart hero-description">
                        <span className='secondaryText'>
                            Find all properties of your choice.
                        </span>
                        <span className='secondaryText'>
                            Get relief from finding good properties.
                        </span>
                    </div>
                    <div className="flexCenter search-bar">
 {/* didnt understood here*/} <HiLocationMarker color="var(--blue)" size={25} /> 
                        <input type="text" />
                         <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={5800} end={9500} duration={4} />
                                <span>+</span>
                            </span>
                            <span  className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={7000} end={12000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={25} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Awards Won</span>
                        </div>
                    </div>
                </div>

                {/* --------------right side----------- */}
                <div className="hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;