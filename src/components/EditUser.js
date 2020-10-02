import React, {useEffect, useState} from 'react';
import SecurityService from "../services/SecurityService";
import './ListUsers.css'
import {deleteUser, getAllUsers, getUserById, updateUser} from "../services/UserService";

const EditUser = ({ match }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      if (SecurityService.isAutenticado()) {
        const res = await getUserById(match.params.id);
        setUser(res);
        setEmail(res.email);
      }
    }

    getUser();
  }, []);

  const salvar = async () => {
    if (SecurityService.isAutenticado()) {
      await updateUser(user._id,{ email, senha })
    }
  }


  return <div className="container list-users-container">
    <div className="list-users-outter">
      <h2>Editar usuário</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"
                 id="email" aria-describedby="emailHelp"
                 placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Senha</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="form-control"
                 id="pwd" placeholder="Password"/>
        </div>
        <button type="button" onClick={() => salvar()} className="btn btn-primary">Salvar</button>
      </form>
    </div>
  </div>
}

export default EditUser;
