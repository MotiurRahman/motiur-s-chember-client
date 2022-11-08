import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const UserContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  // Create User using email and password
  const creteUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign IN
  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login user using google
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Sign out
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // Manage users

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const authValue = {
    user,
    loader,
    setLoader,
    creteUser,
    signIn,
    googleLogin,
    logout,
  };
  return (
    <UserContext.Provider value={authValue}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
