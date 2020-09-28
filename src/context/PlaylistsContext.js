import React, {useEffect, useState} from 'react';
import SecurityService from '../services/SecurityService';
import {findPlaylists, findPlaylistById} from "../services/PlaylistsService";

const $ = window.$;
const PlaylistsContext = React.createContext();

export const PlaylistsProvider = ({children}) => {
  const [autenticado, setAutenticado] = useState(SecurityService.isAutenticado());
  const [playlists, setPlaylists] = useState([]);
  const [tituloModal, setTituloModal] = useState('');
  const [textoModal, setTextoModal] = useState('');

  useEffect(() => {
    // exibirModal('Loja', 'Carregando produtos ...');
    async function fetchData() {
      setPlaylists(await findPlaylists());
      // esconderModal();
    }
    fetchData();
  }, []);

  const exibirModal = (titulo, texto) => {
    setTituloModal(titulo);
    setTextoModal(texto);
    $('#lojaModal').modal('show');
  };

  const esconderModal = () => {
    setTimeout(() => $('#lojaModal').modal('hide'), 500);
  };

  return (
    <PlaylistsContext.Provider value={{
      seguranca: {autenticado, setAutenticado},
      spotilist: {playlists: playlists, setPlaylists: setPlaylists, findPlaylistById},
      modal: {exibirModal, esconderModal, tituloModal, textoModal}
    }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

export default PlaylistsContext;