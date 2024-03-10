import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json';
import { SliderSettings } from '../../utils/Common';
// imported from utils common self made
import './Residencies.css';

// ../../ means directory two levels above current level.
const Residencies = () => {
    return (
        <div>
            <section className="r-wrapper">

                <div className="paddings innerWidth r-container">

                    <div className="r-head flexColStart">
                        <span className="orangeText">Best Choices</span>
                        <span className="primaryText">Popular Residencies</span>
                    </div>

                    <Swiper {...SliderSettings}>
                        <SliderButtons/>
                        {
                            data.map((card, i) => (
                                <SwiperSlide key={i}>
                                    <div className="flexColStart r-card">
                                        {/* flexcolstart here the ele shld be arranged 
                                        in col manner
                                        for exp, here we have 4 ele,
                                        ---img
                                        ---span r-price
                                        ---span name
                                        --span -detail */}
                                        <img src={card.image} alt="home" />
                                        <span className="secondaryText r-price">

                                            <span style={{color:"orange"}}>$</span>
                                            <span>{card.price}</span>

                                        </span>

                                        <span className="primaryText">{card.name}</span>
                                        <span className="secondaryText">{card.detail}</span>

                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </div>
    )
}

export default Residencies;


const SliderButtons = () =>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
           <button onClick={() => swiper.slidePrev()}>&lt;</button>
           <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};
