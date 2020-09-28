const TOKEN = 'token';

const getToken = () => {
  return sessionStorage.getItem(TOKEN);
};

const setToken = (token) => {
  sessionStorage.setItem(TOKEN, token);
};

const removeToken = (token) => {
  sessionStorage.removeItem(TOKEN);
};

const isAutenticado = () => {
  return !!getToken();
};

export default {
  getToken,
  setToken,
  isAutenticado,
  removeToken
};