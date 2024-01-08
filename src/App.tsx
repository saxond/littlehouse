import React, { useState, useEffect } from "react";

import './App.css';
import littlehouse from './littlehouse.jpg'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

export default function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    if (user) {
      console.log(user);
      //debugger; // eslint-disable-line no-debugger
    }
  }, [ user ]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  const logOut = () => {
    googleLogout();
    setUser(null);
  };

  const loggedIn = user;
  return (
    <div className="App">
      <img src={littlehouse} alt="LittleHouse" className="LHImage" />
      {!loggedIn && <button onClick={() => login()}>Sign in with Google 🚀 </button>}
      {loggedIn && <button onClick={() => logOut()}>Log out</button>}
    </div>
  );
}
