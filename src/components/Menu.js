import React from "react";
import './Menu.css'
import {useHistory} from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  const goToCreateUser = () => {

    history.push("/create-user");
  }

  return (
    <div className="nav-menu">
      <div className="float-right">
        <button className="btn btn-outline-light btn-sm" onClick={goToCreateUser}>Criar Usuário</button>
        <button className="btn btn-outline-dark btn-sm ml-2">Logout</button>
      </div>
    </div>
  );
};

export default Menu;
