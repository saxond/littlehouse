import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import littlehouse from './littlehouse.jpg'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { setUser as setUserInLocal, getUser, removeUser } from "./user.ts";
import type { User } from "./user.ts";
import Info from "./Info.tsx";
import Home from "./Home.tsx";

export default function App() {
  const [ user, setUser ] = useState<User>(null);

  useEffect(() => {
    // get from local storage
    const u = getUser();
    if (u) {
      // set user state
      setUser(u);
    }
  }, []);

  useEffect(() => {
    if (user) {
      console.log(user);
      setUserInLocal(user);
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
    removeUser();
  };

  const loggedIn = user;
  return (
    <Router>
      <div className="App">
        {!loggedIn && <div><button onClick={() => login()}>Sign in with Google 🚀 </button></div>}
        {loggedIn &&
          <>
            <button onClick={() => logOut()}>Log out</button>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/info">Info</Link></div>
          </>
        }
        <Switch>
          <Route exact path="/info" component={Info} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
