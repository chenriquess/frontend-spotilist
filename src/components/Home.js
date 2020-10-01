import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';
import PlaylistsCover from "./PlaylistsCover";
import MusicList from "./MusicList";
import LocalPlaylists from "./LocalPlaylists";
import Menu from "./Menu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {PlaylistsProvider} from "../context/PlaylistsContext";
import RotaPrivada from "./PrivateRoute";
import PlataformsLogin from "./PlataformsLogin";
import CreateUser from "./CreateUser";

const Home = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get('http://localhost:5000/spotify/playlists');
      console.log('res.data', res.data)
      setPlaylists(res.data || []);
    }

    fetchData();

  }, [])

  return (
    <Router>
      <Switch>
        <RotaPrivada path="/">
          <Menu/>
          <RotaPrivada path="/create-user" component={CreateUser} />
          <PlaylistsCover playlists={playlists}/>
          <LocalPlaylists/>
          <MusicList/>
        </RotaPrivada>
      </Switch>
    </Router>
  );
};

export default Home;
