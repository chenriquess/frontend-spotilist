import React, {useState} from 'react';
import logo from "../logo.svg";
import api from "../api";

const PlataformsLogin = () => {
  const [authorizeURL, setAuthorizeURL] = useState('');
  api.get('/spotify/login').then(res => {
    if (res.data.spotifyAuth === false) {
      setAuthorizeURL(res.data.authorizeURL);
    }
  })

  return (
    <header className="App-header">
      <div className="d-flex">
      <a className="btn btn-primary" href={authorizeURL}>Spotify Login</a>
      <a className="btn btn-danger disabled ml-5" href={authorizeURL}>Youtube Login</a>
      </div>
    </header>
  );
};

export default PlataformsLogin;
