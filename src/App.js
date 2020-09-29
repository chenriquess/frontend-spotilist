import React from 'react';
import './App.css';
import PrivateInfo from "./PrivateInfo";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./components/Search";
import Login from "./components/Login";
import RotaPrivada from "./components/PrivateRoute";
import {PlaylistsProvider} from "./context/PlaylistsContext";
import Modal from "./components/Modal";

function App() {
  return (
    <PlaylistsProvider>
      <Router>
        <div className="App">
          <Switch>
            {/*<Route path="/" exact component={Home} />*/}
            <RotaPrivada path="/" exact component={PrivateInfo}/>
            <Route path="/search" component={Search}/>
            <Route path="/login"><Login/></Route>
          </Switch>
        </div>
      </Router>
      <Modal/>
    </PlaylistsProvider>
  );
}

export default App;
