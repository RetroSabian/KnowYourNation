import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Switch,NavLink } from "react-router-dom";

import './App.sass';
import Dummy from "./js/components/Dummy";
import Home from "./js/components/Home/Home";
import Navbar from './js/components/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Navbar/>
            <Switch>
              <Route path="/Dummy" component={Dummy} />
              <Route component={Home} />
            </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
