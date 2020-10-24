import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';
import PlaylistsCover from "./PlaylistsCover";
import MusicList from "./MusicList";
import LocalPlaylists from "./LocalPlaylists";
import Menu from "./Menu";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import RotaPrivada from "./PrivateRoute";

const Home = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get('http://localhost:5000/spotify/playlists');
      setPlaylists(res.data || []);
    }

    fetchData();

  }, [])

  return (
    <Router>
      <Switch>
        <RotaPrivada path="/">
          <Menu/>
          <PlaylistsCover playlists={playlists}/>
          <LocalPlaylists/>
          <MusicList/>
        </RotaPrivada>
      </Switch>
    </Router>
  );
};

export default Home;
