import api from "../api";


export const createPlaylist = async (data) => {
  let res = await api.post('/playlist/', data);
  return res.data;
};

export const updatePlaylist = async (playlistId, data) => {
  let res = await api.put('/playlist/' + playlistId, data);
  return res.data;
};

export const getPlaylist = async (playlistId) => {
  let res = await api.get('/playlist/' + playlistId);
  return res.data;
};

export const getPlaylists = async () => {
  let res = await api.get('/playlist/');
  return res.data;
};

export const deletePlaylist = async (playlistId) => {
  let res = await api.delete('/playlist/' + playlistId);
  return res.data;
};
