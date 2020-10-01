import React, {useContext, useState} from 'react';
import PlaylistsContext from "../context/PlaylistsContext";
import {createPlaylist, updatePlaylist} from "../services/LocalPlaylistsService";
import './LocalPlaylists.css'

const LocalPlaylists = () => {
  const [NewPlaylistName, setNewPlaylistName] = useState('');
  const [PlaylistSelected, setPlaylistSelected] = useState({ _id: null });
  const { spotilist, modal } = useContext(PlaylistsContext);

  const newPlaylistSelected = (playlistItem) => {
    setPlaylistSelected(playlistItem);
    spotilist.setCurrentLocalPlaylist(playlistItem)
    console.log('selecionada:', PlaylistSelected)
  }

  const localPlaylistsRender = (playlistItem, i) => {
    return <div key={i} className="playlist-box ml-5" onClick={() => newPlaylistSelected(playlistItem)}
                onDoubleClick={() => modal.exibirModal('Editar playlist', modalInput())}>
      <span className={PlaylistSelected._id === playlistItem._id ? 'playlist-name' : 'playlist-name text-secondary'}>
        {playlistItem.title || 'Playlist sem nome'}
      </span>
    </div>
  }

  const savePlaylist = async () => {
    console.log('spotilist.currentLocalPlaylist._id', spotilist.currentLocalPlaylist)
    const resPlaylist = spotilist.currentLocalPlaylist._id
      ? await updatePlaylist(spotilist.currentLocalPlaylist._id, {
        title: spotilist.currentLocalPlaylist.title,
        songs: spotilist.currentLocalPlaylist.songs
      })
      : await createPlaylist({ title: NewPlaylistName, songs: spotilist.currentLocalPlaylist.songs });


    if (resPlaylist) {
      spotilist.setCurrentLocalPlaylist({
        _id: resPlaylist._id,
        title: NewPlaylistName,
        songs: resPlaylist.songs || []
      });
    }

  }

  const removerMusica = (musicItem) => {
    const musicIndex = spotilist.currentLocalPlaylist.songs.findIndex(music => music.id === musicItem.id);
    if (~musicIndex) {
      spotilist.currentLocalPlaylist.songs.splice(musicIndex, 1);
    }
  }

  const setValor = (e) => setNewPlaylistName(e.target.value);

  const emptySongsLabel = (hasSong) => !hasSong ? <span>Nenhuma música encontrada</span> : null;

  const modalInput = () => {
    return <>
      <input type="text" className="mb-5" onChange={(e) => setValor(e)}/>
      <h3>Musicas:</h3> {emptySongsLabel(spotilist.currentLocalPlaylist.songs.length)}
      {spotilist.currentLocalPlaylist.songs.length ? spotilist.currentLocalPlaylist.songs.map((item, index) => {
        return <p key={index}>
          {item.id} - {item.title} - {item.artists.join(', ')} - Album: {item.album} - Popularity: {item.popularity}
          <a href="#" onClick={() => removerMusica(item)}>Remover</a>
        </p>
      }) : null}
    </>
  }

  return <>
    <div className="local-playlist-container">
      <div className="local-playlist-inner">

        <div className="playlist-box"
             onDoubleClick={() => modal.exibirModal('Digite o nome da playlist', modalInput())}>
          <span className="playlist-name">{NewPlaylistName || 'Clique duas vezes para criar'}</span>
        </div>

        {spotilist.LocalPlaylists.length ? spotilist.LocalPlaylists.map(localPlaylistsRender) : null}


      </div>
    </div>
    <button className="btn btn-primary btn-salvar" onClick={() => savePlaylist()}>Salvar</button>
  </>
}

export default LocalPlaylists;