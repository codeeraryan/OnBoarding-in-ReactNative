import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {createContext, useContext, useState} from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDN3beHn93zbjTR4BnrPREGhCb8bljS23I",
  authDomain: "letscookiit.firebaseapp.com",
  projectId: "letscookiit",
  storageBucket: "letscookiit.firebasestorage.app",
  messagingSenderId: "717422309915",
  appId: "1:717422309915:web:9b5140802e1244cbfabebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseContext = createContext();
const auth = getAuth(app);


export const FirebaseProvider = ({children}) => {
   const[isLogin,setIsLogin] =useState(false);
  const registerUser = async(email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      console.log("user registered : ", userCredential.user )
      return userCredential.user;
    } catch (error) {
      console.error('Error registering:', error.message);
    }
  };

  const loginUser = async(email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth,email, password);
      console.log('User logged in:', userCredential.user);
      return userCredential.user
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <FirebaseContext.Provider value={{registerUser,loginUser,isLogin,setIsLogin}}>{children}</FirebaseContext.Provider>
  )
}


export const useFirebase=()=>useContext(FirebaseContext);