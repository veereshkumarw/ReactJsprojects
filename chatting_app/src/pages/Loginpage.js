import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faFolderPlus} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
// import addAvatar from '../images/addAvatar.png';
import { useState } from "react";

const Loginpage = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='outer-div'>

        <div className='main-div'>
            <span className='logo'>Chatting App</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Enter your Email'></input>
                <input type='password' placeholder='Enter your Password'></input>
                <button>Log In</button>
                {err && <span>Something gone wrong</span>}
            </form>
            <p>New to Chatting App?<Link to='/register'>Register</Link></p>
        </div>
      
    </div>
  )
}

export default Loginpage;
