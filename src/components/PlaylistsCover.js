import React, {useContext} from 'react';
import './PlaylistsCover.css'
import PlaylistsContext from "../context/PlaylistsContext";

const PlaylistsCover = (props) => {
  const {playlists} = props;
  const {spotilist} = useContext(PlaylistsContext);


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
      {playlists.map(renderPlaylists)}
    </div>
  );
};

export default PlaylistsCover;