import React, { Component } from 'react';
import { BrowserRouter, Route, Switch,NavLink } from "react-router-dom";

import './Navbar.sass';
import Dummy from "../Dummy";
import Home from "../Home/Home";
class Navbar extends Component {
    render() {
    return (
      <div className="Navbar">
        <h3> Navbar </h3>
        <hr/>
        
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/Dummy"> Dummy </NavLink>
      </div>
    );
  }
}

export default Navbar;
