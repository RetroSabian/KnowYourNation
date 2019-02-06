import React, { Component } from 'react';
import ArticleApp from "../App";
// import worker from "../../other/workerz";
import MyWorker from '../../other/workerz';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Route, Switch,NavLink } from "react-router-dom";

class Home extends Component {
  
  render() {
    var loc_navBarTitle  = "KnowYourNation";
    var loc_navbarItems = [false,true,true,false];

    return (
      <div className="Home">
      <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
      <h4> Home Component </h4>
      
      <NavLink to="/Books"> <button className="btn btn-success"> Books </button> </NavLink>
      <ArticleApp/>
      </div>
    );
  }
}

export default Home;
