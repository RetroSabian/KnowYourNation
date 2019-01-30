import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ArticleApp from "../App";

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <h4> Home Component </h4>
      <ArticleApp/>
      </div>
    );
  }
}

export default Home;
