import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import "./Navbar.sass";
import Dummy from "../Dummy";
import Home from "../Home/Home";
import Login from "../LoginPage/Login";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <hr />
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/Dummy"> Dummy </NavLink>
        <NavLink to="/Login"> Login</NavLink>
      </div>
    );
  }
}

export default Navbar;
