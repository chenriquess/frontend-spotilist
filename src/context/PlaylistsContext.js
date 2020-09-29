import React, {useEffect, useState} from 'react';
import SecurityService from '../services/SecurityService';
import {findPlaylists, findPlaylistById} from "../services/PlaylistsService";
import api from "../api";

const $ = window.$;
const PlaylistsContext = React.createContext();

export const PlaylistsProvider = ({children}) => {
  const [autenticado, setAutenticado] = useState(SecurityService.isAutenticado());
  const [playlists, setPlaylists] = useState([]);
  const [musicList, setMusicList] = useState([]);
  const [tituloModal, setTituloModal] = useState('');
  const [textoModal, setTextoModal] = useState('');

  useEffect(() => {
    exibirModal('Músicas', 'Carregando Playlists...');

    async function fetchData() {
      setPlaylists(await findPlaylists());
      esconderModal();
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
    setTimeout(() => $('#lojaModal').modal('hide'), 500);
  };

  return (
    <PlaylistsContext.Provider value={{
      seguranca: {autenticado, setAutenticado},
      spotilist: {
        playlists: playlists,
        setPlaylists: setPlaylists,
        findPlaylistById,
        loadPlaylistsMusics,
        musicList,
        searchMusic
      },
      modal: {exibirModal, esconderModal, tituloModal, textoModal}
    }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

export default PlaylistsContext;