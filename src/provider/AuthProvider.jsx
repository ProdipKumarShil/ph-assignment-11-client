import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  const googleSignUp = () => {
    return signInWithPopup(auth, provider)
  }

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = userInfo => {
    return updateProfile(auth.currentUser, userInfo)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, 
        (loggedInUser) => {
          setUser(loggedInUser)
        }
      )
      return () => {
        unSubscribe()
      }
  } , [])

  if(user){
    console.log(user)
  }

  const info = {
    googleSignUp,
    setUser,
    emailSignUp,
    updateUser,
    emailLogin,
    logOut
  }

  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;