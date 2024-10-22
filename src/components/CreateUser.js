import React, {useState} from 'react';
import axios from 'axios';
import './Login.css'
import {useHistory} from "react-router-dom";

const CreateUser = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const create = async () => {
    await axios.post('http://localhost:5000/user', { email, senha })
  }

  const goToLogin = () => history.push("/login");

  return <div className="container login-container">
    <div className="login-outter">
      <h2>Criar Usuário</h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"
                 id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Senha</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="form-control"
                 id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="button" onClick={() => create()} className="btn btn-primary">Salvar</button>
        <button className="btn btn-primary ml-2" onClick={goToLogin}>Login</button>
      </form>

    </div>
  </div>
}

export default CreateUser;
