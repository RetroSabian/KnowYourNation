import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import "./Navbuttons.scss";

/*
  This fragment is the volunteer and donate button that will be used accross multiple pages
*/
class Navbuttons extends Component {
  render() {
    return (
        <div className="nav-buttons">
          <button className="btn-nav-button left-nav-button">
            Volunteer
          </button>
          <button className="btn-nav-button center-nav-button">
            <i className="fas fa-angle-down"></i>
          </button>
          <button className="btn-nav-button right-nav-button">
            Donate
          </button>
        </div>
    );
  }
}

export default Navbuttons;