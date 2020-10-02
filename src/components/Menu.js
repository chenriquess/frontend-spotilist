import React, {useContext} from "react";
import './Menu.css'
import {useHistory} from "react-router-dom";
import SecurityService from "../services/SecurityService";
import PlaylistsContext from "../context/PlaylistsContext";

const Menu = () => {
  const { security } = useContext(PlaylistsContext);
  const history = useHistory();

  const goToUsers = () => {
    history.push("/list-users");
    window.location.reload();
  }

  const logout = () => {
    SecurityService.removeToken();
    security.setAutenticado(false);
    history.push("/login");
    window.location.reload();
  };

  return (
    <div className="nav-menu">
      <div className="float-right">
        <button className="btn btn-outline-light btn-sm" onClick={goToUsers}>Listar Usuarios</button>
        <button className="btn btn-outline-dark btn-sm ml-2" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Menu;
