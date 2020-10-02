import React, {useEffect, useState} from 'react';
import SecurityService from '../services/SecurityService';
import {findPlaylists, findPlaylistById} from "../services/SpotifyPlaylistsService";
import api from "../api";
import {getPlaylists} from "../services/LocalPlaylistsService";

const $ = window.$;
const PlaylistsContext = React.createContext();

export const PlaylistsProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(SecurityService.isAutenticado());
  const [playlists, setPlaylists] = useState([]);
  const [LocalPlaylists, setLocalPlaylists] = useState([]);
  const [musicList, setMusicList] = useState([]);
  const [tituloModal, setTituloModal] = useState('');
  const [textoModal, setTextoModal] = useState('');
  const [currentLocalPlaylist, setCurrentLocalPlaylist] = useState({id: '', title: '', songs: []});

  useEffect(() => {

    async function fetchData() {
      setPlaylists(await findPlaylists() || []);
      setLocalPlaylists(await getPlaylists())
    }

    fetchData();
  }, []);

  const loadPlaylistsMusics = async (id) => {
    setMusicList(await findPlaylistById(id));
  }


  const searchMusic = async (searchInput) => {
    const res = await api.get('http://localhost:5000/spotify/search?q=' + searchInput);
    setMusicList(res.data);
  }

  const exibirModal = (titulo, texto) => {
    setTituloModal(titulo);
    setTextoModal(texto);
    $('#modalPrincipal').modal('show');
  };

  const esconderModal = () => {
    setTimeout(() => $('#modalPrincipal').modal('hide'), 500);
  };

  return (
    <PlaylistsContext.Provider value={{
      security: { autenticado, setAutenticado },
      spotilist: {
        playlists,
        setPlaylists,
        findPlaylistById,
        loadPlaylistsMusics,
        musicList, setMusicList,
        currentLocalPlaylist, setCurrentLocalPlaylist,
        LocalPlaylists, setLocalPlaylists,
        searchMusic
      },
      modal: { exibirModal, esconderModal, tituloModal, textoModal }
    }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

export default PlaylistsContext;
