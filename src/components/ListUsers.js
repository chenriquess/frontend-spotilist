import React, {useEffect, useState} from 'react';
import SecurityService from "../services/SecurityService";
import './ListUsers.css'
import {deleteUser, getAllUsers} from "../services/UserService";
import {useHistory} from "react-router-dom";

const ListUser = () => {
  const [listUser, setListUser] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getUsers = async () => {
      console.log('chamou')
      if (SecurityService.isAutenticado()) {
        const res = await getAllUsers();
        setListUser(res);
        console.log('getUsers:', listUser)
      }
    }

    getUsers();
  }, []);

  const removeUser = async (user) => {
    if (SecurityService.isAutenticado()) {
      const res = await deleteUser(user._id)
      window.location.reload();
      console.log('deleteUser:', res)
    }
  }

  const editUser = async (item) => {
    if (SecurityService.isAutenticado()) {
      history.push('/edit/' + item._id)
    }
  }

  const usersRender = (item, index) => {
    return <div key={index} className="list-group-item list-group-item-dark">
      <div className="row">
        <div className="col">
          {item.email}
        </div>
        <div className="col text-right">
          <button className="btn btn-secondary btn-sm" onClick={() => editUser(item)}>Editar</button>
        </div>
        <div className="col text-right">
          <button className="btn btn-danger btn-sm" onClick={() => removeUser(item)}>Remover</button>
        </div>
      </div>
    </div>
  }


  return <div className="container list-users-container">
    <div className="list-users-outter">
      <h2>Users</h2>
      <div className="list-group list-group-flush">
        {listUser ? listUser.map(usersRender) : null}
      </div>
    </div>
  </div>
}

export default ListUser;
