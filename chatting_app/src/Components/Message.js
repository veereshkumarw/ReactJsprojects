import React, { useContext, useRef, useEffect } from 'react';
import { AuthContext } from '../context/AuthenticationContext';
import { ChatContext } from '../context/chatContext';

const Message = ({message}) => {

  const{currentUser} = useContext(AuthContext);
  const{data} = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  console.log(message);
  return (
    <div  ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className='message-info'>
        <img src={ message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL}/>
        <span>Just now</span>
      </div>
      <div className='message-content'>
        {message.text && <p>{message.text}</p>}
        {message.img && <img src={message.img} alt="user" />}
      </div>
    </div>
  )
}

export default Message;
