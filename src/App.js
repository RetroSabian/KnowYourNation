import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Switch,NavLink } from "react-router-dom";

import './App.sass';
import Dummy from "./js/components/Dummy";
import Home from "./js/components/Home/Home";
import Books from "./js/components/Books/Books";
import Navbar from './js/components/Navbar/Navbar';

class App extends Component {
  render() {
 
    var loc_navBarTitle  = "KnowYourNation";
    var loc_navbarItems = [false,true,true,true];
    
    return (
      <div className="App">
      <BrowserRouter>
        <div className="borderRed">
          {/* <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/> */}
            <Switch> 
              <Route path="/Dummy" component={Dummy} />
              <Route path="/Books" component={Books} />
              <Route component={Home} />
            </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
