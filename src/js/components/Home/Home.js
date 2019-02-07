import React, { Component } from "react";
import ArticleApp from "../App";
import Mapbuttons from "./Countries";
import Map from "./Map";
import MyWorker from "../../other/workerz";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = { center: [0, 0] };
  }
  changeCenter = center => () => {
    this.setState({ center });
  };
  render() {
    var loc_navBarTitle = "KnowYourNation";
    var loc_navbarItems = [false, true, true, false];

    return (
      <div className="Home">
        <Navbar
          titleFromParent={loc_navBarTitle}
          navbarItems={loc_navbarItems}
        />
        <h4> Home Component </h4>

        <NavLink to="/Books">
          {" "}
          <button className="btn btn-success"> Books </button>{" "}
        </NavLink>
        <h4> Insert speedy picture here </h4>
        <Mapbuttons />
        {/*<ArticleApp/>*/}
      </div>
    );
  }
}

export default Home;
