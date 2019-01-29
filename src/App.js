import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch,NavLink } from "react-router-dom";

import './App.sass';
import Dummy from "./Components/Dummy";
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';


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
