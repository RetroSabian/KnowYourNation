import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import "./Navbar.sass";

/*
      loc_navBarTitle: String passed to object for the title
      navbarItems: Visibility of the search, user and (bars / cross) icons.
    */
class Navbar extends Component {
  render() {
    return (
<nav className="navbar borderRed navbar-expand-lg navbar-dark bg-dark">
  {this.props.navbarItems[0] === true ?<NavLink to="/"><div className="fas"><i class="fas fa-chevron-circle-left"></i></div></NavLink>:null}
  <a className="navbar-brand" href="#">{this.props.titleFromParent}</a>
    <ul className="nav navbar-right ml-auto">     
      {this.props.navbarItems[1] === true ? <li><i class="fas fa-search"></i></li> : null}
      {this.props.navbarItems[2] === true ? <li><i class="fas fa-user-circle"></i></li> : null}
      {this.props.navbarItems[3] === true ? <li><i class="fas fa-bars"></i></li> : null}
      {this.props.navbarItems[3] === false ? <i class="fas fa-times"></i> : null}
    </ul>
</nav>
      <nav className="navbar borderRed navbar-expand-lg navbar-dark  bg-dark">
        {this.props.navbarItems[0] == true ? (
          <NavLink to="/">
            <div className="fas">
              <i class="fas fa-chevron-circle-left" />
            </div>
          </NavLink>
        ) : null}
        <a className="navbar-brand" href="#">
          {this.props.titleFromParent}
        </a>
        <ul className="nav navbar-right ml-auto">
          {this.props.navbarItems[1] == true ? (
            <li>
              <i class="fas fa-search" />
            </li>
          ) : null}
          {this.props.navbarItems[2] == true ? (
            <NavLink to="/login">
              <div className="fas">
                <li>
                  <i class="fas fa-user-circle" />
                </li>
              </div>
            </NavLink>
          ) : null}
          {this.props.navbarItems[3] == true ? (
            <li>
              <i class="fas fa-bars" />
            </li>
          ) : null}
          {this.props.navbarItems[3] == false ? (
            <i class="fas fa-times" />
          ) : null}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
