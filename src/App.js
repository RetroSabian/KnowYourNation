import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch,NavLink } from "react-router-dom";

import './App.css';
import Dummy from "./Components/Dummy";
import Home from "./Components/Home";


class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/Dummy"> Dummy </NavLink>
            <Switch>
              <Route path="/Dummy" component={Dummy} exact />
              <Route component={Home} />
            </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
