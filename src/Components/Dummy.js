import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

class Dummy extends Component {
  render() {
    return (
      <div className="Dummy">
      <Navbar/>
        <h4> Dummy </h4>
            
      </div>
    );
  }
}

export default Dummy;
