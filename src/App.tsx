import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import FilmPage from './pages/FilmPage'
import TeamPage from './pages/TeamPage'

import {
  BrowserRouter as HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


const App:React.FunctionComponent = () =>{
  return (
    <div className="wrapper">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/film" component={FilmPage} />
          <Route exact path="/aboutTheTeam" component={TeamPage} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </div>
    );
}

export default App;
