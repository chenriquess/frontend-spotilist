import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";
import SecurityService from "../services/SecurityService";
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const login = async () => {
    const res = await axios.post('http://localhost:5000/login', { email, senha })
    if (res.data.token) {
      SecurityService.setToken(res.data.token);
      history.push("/plataforms-login");
    }
  }

  const goToCreateUser = () => {
    history.push("/create-user");
    window.location.reload();
  }

  return <div className="container login-container">
    <div className="login-outter">
      <h2>Login</h2>
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
        <button type="button" onClick={login} className="btn btn-primary">Entrar</button>
        <button className="btn btn-primary ml-2" onClick={goToCreateUser}>Criar Usuário</button>
      </form>

    </div>
  </div>
}

export default Login;
