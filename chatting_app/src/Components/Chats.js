import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthenticationContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { ChatContext } from "../context/chatContext";

const Chats = () => {
  const [chats, setChats] = useState([]); //it holds user chats from api
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      //taken from firebase- "Get realtime updates with Cloud Firestore"
      return () => {
        unsub(); // this for clean up
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  // it shld load in real time. so when there is changes in "userchats db" it will reflected here by using
  // "get real time data from firebase"

 // console.log(chats);  since we get this in object, we need it in array.
  //so
  //console.log(Object.entries(chats)); //converting it into array from objects.
//so this an array, we get id at 0th index {chat[0]}

const handleSelect = (u) =>{
  dispatch(
    {
      type: "CHANGE_USER", payload: u
    }
  )
}

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
          <div className="user-chat" key={chat[0]} 
          onClick={()=>handleSelect(chat[1].userInfo)}
          > 
          <img
            src={chat[1].userInfo.photoURL}
            alt="chat-image"
          />
          <div className="userChat-info">
            <span className="name">{chat[1].userInfo.displayName}</span>
            <span className="chat-info">{chat[1].lastMessage?.text}</span>
          </div>
        </div>
      ))
      }

      {/* ---------------------------------------------------------------------------------------- */}

      {/* ----------------------------------------------------------------------------------------- */}

    </div>
  );
};

export default Chats;
