import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Bookcard from "../Books/Bookcard/Bookcard";
import { NavLink } from "react-router-dom";
import ArticleReader from "../Articles/ArticleReader";

import "./Book.sass";
class Books extends Component {
  render() {
    var navBarTitle = "BOOKS";
    var navbarItems = [true, true, true, true];

    return (
      <div className="Books">
        <Navbar titleFromParent={navBarTitle} navbarItems={navbarItems} />
        <br />
        <div className="container ">
          <div className="row">
            <div className="col-4  noPaddMar">
              <NavLink to="/ereader">
                <Bookcard />
              </NavLink>
            </div>
            <div className="col-4  noPaddMar">
              <NavLink to="/ereader">
                <Bookcard />
              </NavLink>
            </div>
            <div className="col-4  noPaddMar">
              <NavLink to="/ereader">
                <Bookcard />
              </NavLink>
            </div>
            <div className="col-4  noPaddMar">
              <NavLink to="/ereader">
                <Bookcard />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
