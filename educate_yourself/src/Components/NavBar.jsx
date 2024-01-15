import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{
    return(
        <nav>
            <div className="menuIcon">

                <ul className="navbar-list">
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;