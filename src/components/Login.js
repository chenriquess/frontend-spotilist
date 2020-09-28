import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import SecurityService from "../services/SecurityService";

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const login = async () => {
    console.log('post')
    const res = await axios.post('http://localhost:5000/login', {email, senha})
    if(res.data.token) {
      SecurityService.setToken(res.data.token);
      history.push("/");
    }

    console.log(' res ', res.data)
  }

  return <div className="container">
    <div className="row">
      <div className="col"><h1>Login</h1></div>
    </div>
    <div className="row">
      <div className="col">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <label>Senha</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>

        <button onClick={login}>Login</button>
      </div>
    </div>

  </div>
}

export default Login;