import React, {useState} from 'react';
import {
    Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton,
    AccordionItemPanel, AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';
import './Values.css';
const Values = () => {
    return (
        <div className="v-wrapper">

            <div className="paddings innerWidth flexCenter v-container">

                {/* left side div */}

                <div className="v-left-side">
                    <div className="image-container">
                        <img src="./value.png" alt="value" />
                    </div>
                </div>

                {/* right side */}

                <div className="flexColStart v-right-side">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give To Our Customers</span>
                    <span className='secondaryText'>We Are always Ready to Help by providing best Services to You
                        <br />
                        We beleive a good Blace to livee can bring Happieness.
                    </span>
                    
                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}>

                        {data.map((item, i) => {
                            // const [className, setClassName] = useState(null);
                            // geting this error while using hook with accoritem n accordion
                            // item state.
// React Hook "useState" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function

                            return(
                                
                                // <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItem className="accordionItem" key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>

                                            {/* <AccordionItemState>
                                                {({expanded}) => expanded? setClassName("expanded"): setClassName("collapsed")}
                                            </AccordionItemState> */}
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })
                        }
                    </Accordion>

                </div>
            </div>
        </div>
    )
}

export default Values
