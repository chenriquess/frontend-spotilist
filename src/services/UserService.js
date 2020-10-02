import api from "../api";

export const createUser = async (data) => {
  let res = await api.post('/user/', data);
  return res.data;
};

export const updateUser = async (userId, data) => {
  let res = await api.put('/user/' + userId, data);
  return res.data;
};

export const getUserById = async (userId) => {
  let res = await api.get('/user/' + userId);
  return res.data;
};

export const getAllUsers = async () => {
  let res = await api.get('/user/');
  return res.data;
};

export const deleteUser = async (userId) => {
  let res = await api.delete('/user/' + userId);
  return res.data;
};
