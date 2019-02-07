import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import "./Navbuttons.sass";

/*
  This fragment is the volunteer and donate button that will be used accross multiple pages
*/
class Navbuttons extends Component {
  render() {
    return (
        <div className="Navbuttons">
          <button className="btnNavButton leftNavButton">
            Volunteer
          </button>
          <button className="btnNavButton centerNavButton">
            <i className="fas fa-angle-down"></i>
          </button>
          <button className="btnNavButton rightNavButton">
            Donate
          </button>
        </div>
    );
  }
}

export default Navbuttons;