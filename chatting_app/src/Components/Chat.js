import React, {useContext} from 'react';
import Camera from '../images/cam.png';
import Image from '../images/img.png';
import More from '../images/more.png';
import Messages from './Messages';
import Input from './Input';
import {ChatContext} from '../context/chatContext';

const Chat = () => {

  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className='chatMsg-info'>
        <span>{data.user?.displayName}</span>
        <div className='chat-icons'>
          <img src={Camera} alt='icons'/>
          <img src={Image} alt='icons'/>
          <img src={More} alt='icons'/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat;
