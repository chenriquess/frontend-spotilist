import api from "../api";

export const findPlaylists = async () => {
  let res = await api.get('/spotify/playlist');
  return res.data;
};

export const findPlaylistById = async (id) => {
  let res = await api.get('/spotify/playlist/' + id);
  return res.data;
};