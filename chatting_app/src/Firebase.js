// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3tIO7QqcL5y91kWCfmMgx8c8JeTTsqxI",
  authDomain: "chat-app-2eb09.firebaseapp.com",
  projectId: "chat-app-2eb09",
  storageBucket: "chat-app-2eb09.appspot.com",
  messagingSenderId: "166873153118",
  appId: "1:166873153118:web:e1a87bad6cff04a44f3ecf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
