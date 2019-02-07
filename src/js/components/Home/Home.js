import React, { Component } from "react";
import Mapbuttons from "./Countries";
import Navbar from "../Navbar/Navbar";
import Navbuttons from "../Fragments/Navbuttons";
import { NavLink } from "react-router-dom";
import "./Home.sass";

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
        <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
        <NavLink to="/Books">
          <button className="btn btn-success"> Books </button>{" "}
        </NavLink>
        <Mapbuttons />
        <Navbuttons/>
      </div>
    );
  }
}

export default Home;
