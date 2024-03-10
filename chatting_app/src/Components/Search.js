import React, { useContext, useState } from 'react';
import { collection, query, where, getDoc, getDocs, serverTimestamp, setDoc, updateDoc, doc } from "firebase/firestore";
import {db} from '../Firebase';
import { AuthContext } from '../context/AuthenticationContext';

const Search = () => {

  const [username, setUsername] = useState("");  // used to change directly input entered by user
  const [user, setUser] = useState(null);   //if username is found, then that user is set to 'user' state
  const [error, setError] = useState(false);
  const {currentUser} = useContext(AuthContext);

  const handleSearch = async() => {
    const userRef = collection(db, "users");

    // Create a query against the collection.
    const q = query(userRef, where("displayName", "==", username));

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      setUser(doc.data())
    });
    }catch(error){
      setError(true);
    }
  };

  const handleKey = (e) =>{
     e.code === "Enter" && handleSearch();
  };

  const handleSelect = async() =>{
    // check whether the collection of chat (chats in firestore) exists, if not create it.
    const combinedID = currentUser.uid > user.uid ? 
                       currentUser.uid + user.uid : 
                      user.uid + currentUser.uid;
    try{
      const res = await getDoc(doc(db,"chatsCollection", combinedID));

      if(!res.exists()){  // this is a firebase method
        // need to create a chat in chat collection
        await setDoc(doc(db, 'chatsCollection', combinedID), {messages:[]});

        // create user chats here

        // userChats:{
        //   tuv:{
        //     combinedID:{
        //       userInfo{
        //         disableNetwork, img, id
        //       },
        //       lastMesaage:"",
        //       date:
        //     }
        //   }
        // }

            await updateDoc(doc(db, "userChats", currentUser.uid),{
              [combinedID+".userInfo"]:{
                uid:user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL              
              },
              [combinedID+".date"]:serverTimestamp()
            });

            // another user

            await updateDoc(doc(db, "userChats", user.uid),{
              [combinedID+".userInfo"]:{
                uid:currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL              
              },
              [combinedID+".date"]:serverTimestamp()
            });

      }
    }catch(error){

    }
    setUser(null);
    setUsername('');
    //create user chats
  }

  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' 
               placeholder='Find the person' 
               onKeyDown={handleKey} 
               onChange={e=>setUsername(e.target.value)}
               value={username}>
        
        </input>
      </div>
      {error && <span>User Not found</span>}
      {user && <div className='user-chat' onClick={handleSelect}>
        <img src={user.photoURL}
         alt='chat-image'/>
         <div className='userChat-info'>
            <span>{user.displayName}</span>
         </div>
      </div>}
    </div>
  )
}

export default Search;
