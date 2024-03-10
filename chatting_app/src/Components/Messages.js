import React, {useContext, useEffect, useState} from 'react';
import Message from './Message';
import {ChatContext} from '../context/chatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase';

const Messages = () => {

  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(()=>{
    const unsub = onSnapshot(doc(db,"chatsCollection",data.chatId), (doc)=>{
      doc.exists() && setMessages(doc.data().messages)
    })
    return(() => {
      unsub()   //clean up
    })
  },[data.chatId])

  return (
    <div className='messages'>
      {messages.map((m) => (
        <Message message={m} key={m.id}/>
      ))}
    </div>
  )
}

export default Messages;
