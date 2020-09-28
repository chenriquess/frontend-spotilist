import React from 'react';
import './PlaylistsCover.css'

const PlaylistsCover = (props) => {
  const {playlists} = props;

  const renderPlaylists = (playlist, i) => {
    if (playlist.imgUrl) {
      return <div className="playlist" key={i}>
        <img className="cover" src={playlist.imgUrl} alt={playlist.name + ' Playlist'} width="250"/>
        <p>{playlist.title}</p>
      </div>
    }
  }

  return (
    <>
      <h1>Playlists</h1>
        <div className="cover-wrapper">
          {playlists.map(renderPlaylists)}
        </div>
    </>
  );
};

export default PlaylistsCover;