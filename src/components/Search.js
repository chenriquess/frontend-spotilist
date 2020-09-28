import React, {useState} from 'react';
import axios from 'axios';


const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);

  const setValor = (e) => setSearchInput(e.target.value);

  const pesquisar = async () => {
    const res = await axios.get('http://localhost:5000/spotify/search?q=' + searchInput);
    console.log('searches:', res)
    setResultadoPesquisa(res.data);
    // setResultadoPesquisa([{name: "teste1"}, {name: "teste2"}])
  }

  return <div>
    <h1>Busca</h1>
    <input type="text" value={searchInput} onChange={(e) => setValor(e)}/>
    <button onClick={pesquisar}>Search</button>
    {resultadoPesquisa.map((item, index) => {
      return <p key={index}>{item.id} - {item.name} - {item.artists.join(', ')} - Album: {item.album} - Popularity: {item.popularity}</p>
    })}
  </div>
}

export default Search;