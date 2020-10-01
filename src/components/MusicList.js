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

  const addButtonToggle = (musicItem) => {
    if (~spotilist.currentLocalPlaylist.songs.findIndex(music => music.id === musicItem.id)) {
      return <span className="text-secondary">Música Adicionada</span>
    } else {
      return <a href="#" onClick={() => addMusicCurrentPlaylist(musicItem)}>Add</a>
    }
  }

  return <div className="search-container">
    <div className="container">
      <h1>Busca</h1>
      <input type="text" value={searchInput} onChange={(e) => setValor(e)}/>
      <button onClick={() => spotilist.searchMusic(searchInput)}>Search</button>
      {spotilist.musicList.map((item, index) => {
        return <p key={index}>
          {item.id} - {item.title} - {item.artists.join(', ')} - Album: {item.album} - Popularity: {item.popularity}
          {addButtonToggle(item)}
        </p>
      })}
    </div>
  </div>
}

export default MusicList;