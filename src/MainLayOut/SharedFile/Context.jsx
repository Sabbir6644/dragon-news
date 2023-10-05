/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import auth from "../../../public/firebase.config";

export const UserContext = createContext()

const Context = ({ children }) => {
     const [data, setData] = useState();
     const [user, setUser] = useState();
     const [loading, setLoading] = useState(true);
     // google login
     const googleProvider = new GoogleAuthProvider();
     const signInWithGoogle = () => {
          signInWithPopup(auth, googleProvider)
          setLoading(true)
               
     }

     // github login
     const gitHubProvider = new GithubAuthProvider();
     const GithubSignIn = ()=>{
          signInWithPopup(auth, gitHubProvider)
     }
     // Login with emai and pass
     const userLogin = (email, password)=>{
        return  signInWithEmailAndPassword(auth, email, password)
     }
     // createUser
     const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
     }
     //logOut
     const logOut = ()=>{
         return signOut(auth)
     }

     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false)
          })
     }, [])

     useEffect(() => {
          fetch('/news.json')
               .then(res => res.json())
               .then(data => setData(data))
     }, [])
     const userData = {user,loading, setLoading, data, signInWithGoogle, GithubSignIn, userLogin, createUser, logOut }
     return (
          <UserContext.Provider value={userData}>
               {children}
          </UserContext.Provider>
     );
};

export default Context;