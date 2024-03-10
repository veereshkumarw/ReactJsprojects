import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
    // for menu item icon---------------------------------------------
    const [menuOpened, setMenuOpened] = useState(false);
    
    const getMenuStyles = () => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    // ----------------------------------------------------------------------------
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
        
                <img src="./logo.png" alt="logo" width={100} />

         {/* ---------------------------------------------------------------- */}
                <OutsideClickHandler 
                onOutsideClick={()=>{
                    
                    setMenuOpened(false)
                    
                }}>
    {/*OutsideClickHandler => used for if we click outside the menu icon(when menu is opened),
      then the menu shld close if we click anywhere in the window......   */}
         {/* ----------------------------------------------------------------- */}
                     {/* h-container is the main name */}
                    <div className="flexCenter h-menu"
                        style={getMenuStyles(menuOpened)}>
                        {/* //for the menu icon to get opened when clicked
                //and also get closed when   */}
                        <a href="">Residencies</a>
                        <a href="">Values</a>
                        <a href="">Amount</a>
                        <a href="">Contact Us</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>

                    </div>
                </OutsideClickHandler>

                {/* ----------------for responsive------------- */}
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
                {/* ----------------------------------------------------------- */}
            </div>


        </section>
    );
}

export default Header;