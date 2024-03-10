import { signOut } from 'firebase/auth';
import React, {useContext} from 'react'
import { auth } from '../Firebase';
import { AuthContext } from '../context/AuthenticationContext'

const NavBar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className='logo'>Chatting App</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt='logo'></img>
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar;
