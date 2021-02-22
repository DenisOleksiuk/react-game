// import AreaBattle from '../area-battle';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Breakout from '../games/breakout';

import './App.css';

export default function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/breakout">Breakout</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/breakout">
              <Breakout />
            </Route>
            <Route path="/">
              <h2>Home</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
