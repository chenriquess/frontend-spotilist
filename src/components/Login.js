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

  return <div className="container login-container">
    <div className="login-outter">
      <h2>Login</h2>
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
        <button type="button" onClick={login} className="btn btn-primary">Entrar</button>
      </form>

    </div>
  </div>
}

export default Login;
