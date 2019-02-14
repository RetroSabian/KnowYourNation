import React, { Component } from "react";
import Mapbuttons from "./Countries";
import CharacterPage1 from "./SpeedyScreens/Book.js"
import Navbar from "../Navbar/Navbar";
import Navbuttons from "../Fragments/Navbuttons";
import { NavLink } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import "./Home.scss";

class Home extends Component {

  constructor() {
    super();
    this.state = { center: [0, 0] };
  }

  render() {
    let page = this.props.location.pathname.substr(1);
    if (!page) page = 'home';
    var loc_navBarTitle = "KnowYourNation";
    var loc_navbarItems = [false, true, true, false];

    return (
      <div className="home">
        <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
        <NavLink to="/Books">
          <button className="btn btn-success"> Books </button>
        </NavLink>
        <Mapbuttons />
        <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
        <CharacterPage1/>
        <Navbuttons/>
      </div>
    );
  }
}

export default Home;
