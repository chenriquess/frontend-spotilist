import React, {useContext} from 'react';
import './PlaylistsCover.css'
import PlaylistsContext from "../context/PlaylistsContext";
import {useHistory} from "react-router-dom";

const PlaylistsCover = (props) => {
  const {playlists} = props;
  const {spotilist} = useContext(PlaylistsContext);
  const history = useHistory();

  const loginPlataform = () => {
    history.push('/plataforms-login');
    window.location.reload();
  }

  const clickPlaylist = (id) => {
    spotilist.loadPlaylistsMusics(id);
  }

  const renderPlaylists = (playlist, i) => {
    if (playlist.imgUrl) {
      return <div className="playlist" key={i} onClick={() => clickPlaylist(playlist.id)}>
        <img className="cover" src={playlist.imgUrl} alt={playlist.name + ' Playlist'} width="250"/>
        <p>{playlist.title}</p>
      </div>
    }
  }

  return (
    <div className="cover-wrapper">
      {playlists.length ? playlists.map(renderPlaylists) : <button className="btn btn-primary" onClick={loginPlataform}>Login Spotify</button>}
    </div>
  );
};

export default PlaylistsCover;
