import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div>
      <header>

{/* navLink is used to get to required page using 'to='/'' when user clicks on img for this navlink */}

        <NavLink to='/'>
           <img src='./Images/logo.png' alt='logo'/>
        </NavLink>

      <NavBar/>
      </header>
    </div>
  )
}

export default Header
