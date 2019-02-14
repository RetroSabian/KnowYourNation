import React, { Component } from 'react';
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
      {this.props.navbarItems[1] === true ? <li><i className="fas fa-search"></i></li> : null}
      {this.props.navbarItems[2] === true ? (<NavLink to="/login"><li><i className="fas fa-user-circle"></i></li> </NavLink>): null}
      {this.props.navbarItems[3] === true ? <li><i className="fas fa-bars"></i></li> : null}
      {this.props.navbarItems[3] === false ? <i className="fas fa-times"></i> : null}
    </ul>
</nav>

    );
  }
}

export default Navbar;
