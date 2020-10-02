import React from 'react';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MusicList from "./components/MusicList";
import Login from "./components/Login";
import RotaPrivada from "./components/PrivateRoute";
import {PlaylistsProvider} from "./context/PlaylistsContext";
import Modal from "./components/Modal";
import PlataformsLogin from "./components/PlataformsLogin";
import ListUser from "./components/ListUsers";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <PlaylistsProvider>
      <Router>
        <div className="App">
          <Switch>
            <RotaPrivada path="/plataforms-login" component={PlataformsLogin} />
            <RotaPrivada path="/" exact component={Home}/>
            <Route path="/search" component={MusicList}/>
            <Route path="/login"><Login/></Route>
            <RotaPrivada path="/list-users"><ListUser /></RotaPrivada>
            <RotaPrivada path="/edit/:id" component={EditUser} />
            <Route path="/create-user" component={CreateUser} />
          </Switch>
        </div>
      </Router>
      <Modal/>
    </PlaylistsProvider>
  );
}

export default App;
