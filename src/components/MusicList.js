import React, {useContext, useState} from 'react';
import './MusicList.css'
import PlaylistsContext from "../context/PlaylistsContext";

const MusicList = () => {
  const [searchInput, setSearchInput] = useState('');
  const { spotilist } = useContext(PlaylistsContext);

  const setValor = (e) => setSearchInput(e.target.value);

  const addMusicCurrentPlaylist = (musicItem) => {
    spotilist.setCurrentLocalPlaylist({
      title: spotilist.currentLocalPlaylist.title,
      songs: [...spotilist.currentLocalPlaylist.songs, musicItem]
    })
  }

  const buttonAddToggle = (musicItem) => {
    if (~spotilist.currentLocalPlaylist.songs.findIndex(music => music.id === musicItem.id)) {
      return <span className="text-secondary">Adicionada</span>
    } else {
      return <button className="btn btn-link" onClick={() => addMusicCurrentPlaylist(musicItem)}>Adicionar</button>
    }
  }

  const musicRender = (item, index) => {
    return <div key={index} className="list-group-item list-group-item-dark">
      <div className="row">
        <div className="col">
          {item.title}
        </div>
        <div className="col">
          {item.artists.join(', ')}
        </div>
        <div className="col">
          {item.album}
        </div>
        <div className="col text-center">
          {item.popularity}
        </div>
        <div className="col text-right">
          {buttonAddToggle(item)}
        </div>
      </div>
    </div>
  }

  return <div className="search-container">
    <div className="container">

      <h1>Busca</h1>
      <div className="row mb-5">
        <div className="col-3">
          <input type="text" className="form-control" value={searchInput} onChange={(e) => setValor(e)}/>

        </div>
        <div className="col">
          <button className="btn btn-outline-secondary" onClick={() => spotilist.searchMusic(searchInput)}>Search
          </button>
        </div>
      </div>

      {spotilist.musicList.length ?
        <div className="row">
          <div className="col text-center">Nome</div>
          <div className="col text-center">Artistas</div>
          <div className="col text-center">Album</div>
          <div className="col text-center">Popularidade</div>
          <div className="col text-center"> </div>
        </div>
        : null}
      <div className="list-group list-group-flush">
        {spotilist.musicList.map(musicRender)}
      </div>
    </div>
  </div>
}

export default MusicList;
