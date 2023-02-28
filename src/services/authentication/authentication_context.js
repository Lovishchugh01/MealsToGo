// import * as firebase from "firebase";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, {useState, createContext} from 'react';
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();

  onAuthStateChanged(auth,(usr) => {
    if(usr){
      setUser(usr);
      // setLoading(false)
    }else{
      // setLoading(false);
      setUser(null);
      setError(null);
    }
  })

  const onLogin = (email, password) => {
    setLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError("Wrong Email or Password");
        // setError(e.toString());
      });
  };
  const onLogout = () => {
    setUser(null);
    signOut(auth);
  }

  const onRegister = (email, password, repeatedPassword) => {
    setLoading(true)
    if(password !== repeatedPassword){
      setError("Error : Passwords Do not Match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((u) => {
      setUser(u);
      setLoading(false);
    })
    .catch((e) => {
      setLoading(false);
      // setError("Passwords Do not match");
      setError(e.toString());
    });

  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};