import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
    return (
        <section className="c-wrapper">

            <div className="paddings innerWidth flexCenter c-container">
                {/* left side area */}
                <div className="flexColStart c-left-side">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact Us</span>
                    <span className='secondaryText'>Just send us your questions or concerns by starting a new
                        case and we will give you the help you need.</span>

                    <div className="flexColStart contactModes">
                        
                         {/* first row */}
                        <div className="flexStart row">
                            {/* first row */}
                            <div className="flexColCenter mode">

                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexStartCol details">
                                        <span className='primaryText'>Call </span>
                                        <span className='secondaryText'>021 435 546 18</span>
                                    </div>
                                </div>

                                <div className="flexCenter button">Call Now</div>
                            </div>

                            {/* second row */}
                            <div className="flexColCenter mode">

                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexStartCol details">
                                        <span className='primaryText'>Chat </span>
                                        <span className='secondaryText'>021 435 546 18</span>
                                    </div>
                                </div>

                                <div className="flexCenter button">Chat Now</div>
                            </div>

                        </div>
{/* ----------------------------------------------------------------------------- */}
                         {/* second row */}
                        <div className="flexStart row">
                           
                           {/* third mode */}
                            <div className="flexColCenter mode">

                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexStartCol details">
                                        <span className='primaryText'>Video Call </span>
                                        <span className='secondaryText'>021 435 546 18</span>
                                    </div>
                                </div>

                                <div className="flexCenter button">Video Call Now</div>
                            </div>

                            {/* fourth mode */}
                            <div className="flexColCenter mode">

                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexStartCol details">
                                        <span className='primaryText'>Message </span>
                                        <span className='secondaryText'>021 435 546 18</span>
                                    </div>
                                </div>

                                <div className="flexCenter button">Message Now</div>
                            </div>
                            
                        </div>

                    </div>
                </div>

                {/* right side are */}
                <div className="c-right-side">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="contact" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
