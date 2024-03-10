import React, {useContext, useState} from 'react';
import img from '../images/img.png';
import attach from '../images/attach.png';
import { AuthContext } from '../context/AuthenticationContext';
import { ChatContext } from '../context/chatContext';
import { Timestamp, arrayUnion, doc, updateDoc,serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../Firebase';
import { v4  as uuid} from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {

  const{currentUser} = useContext(AuthContext);
  const{data} = useContext(ChatContext);

  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSend = async() =>{

    if(image){

         
      const storageRef = ref(storage, uuid());

      await uploadBytesResumable(storageRef, image).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateDoc(doc(db,"chatsCollection",data.chatId),{
            messages:arrayUnion({
               id:uuid(),
               text,
               senderId:currentUser.uid,
               date: Timestamp.now(),
               image:downloadURL,
            })
          })
        });
      });

    }else{
      await updateDoc(doc(db,"chatsCollection",data.chatId),{
        messages:arrayUnion({
           id:uuid(),
           text,
           senderId:currentUser.uid,
           date: Timestamp.now(),
        })
      })
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });


    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    
    setText("");
    setImage(null);
  }

  return (
    <div className='input'>
      <input type='text' placeholder='Start ur conversation' onChange={e=>setText(e.target.value)} value={text}/>
      <div className='send'>
        <img src={img} alt='media'/>
        <input type='file' style={{display:'none'}} id='file' onChange={e=>setImage(e.target.files[0])}></input>
        <label htmlFor='file'>
          <img src={attach} alt='file attachment'></img>
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input;
