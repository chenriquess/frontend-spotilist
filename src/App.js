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
          </Switch>
        </div>
      </Router>
      <Modal/>
    </PlaylistsProvider>
  );
}

export default App;
