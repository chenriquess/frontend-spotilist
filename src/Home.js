import React from 'react';
import logo from "./logo.svg";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <Link to="/private">
        <button className="btn-login">Spotify Login</button>
      </Link>
    </header>
  );
};

export default Home;