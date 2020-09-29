import React, {useContext, useState} from 'react';
import './Search.css'
import PlaylistsContext from "../context/PlaylistsContext";

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const {spotilist} = useContext(PlaylistsContext);

  const setValor = (e) => setSearchInput(e.target.value);

  return <div className="search-container">
    <h1>Busca</h1>
    <input type="text" value={searchInput} onChange={(e) => setValor(e)}/>
    <button onClick={() => spotilist.searchMusic(searchInput)}>Search</button>
    {spotilist.musicList.map((item, index) => {
      return <p key={index}>{item.id} - {item.title} - {item.artists.join(', ')} - Album: {item.album} - Popularity: {item.popularity}</p>
    })}
  </div>
}

export default Search;