import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Bookcard from "../Books/Bookcard/Bookcard";
import { NavLink } from "react-router-dom";

import "./Book.scss";
class Books extends Component {
  state = {
    booklist: [
      "bookname1",
      "bookname2",
      "bookname3",
      "bookname4",
      "bookname5",
      "bookname6"
    ],
    bookid: 0,
    isClicked: false
  };
  render() {
    let loc_navBarTitle = "BOOKS";
    let loc_navbarItems = [true, true, true, true];

    return (
      <div className="books">
        <Navbar
          titleFromParent={loc_navBarTitle}
          navbarItems={loc_navbarItems}
        />
        <br />
        <div className="container ">
          <div className="row no-padding-margin">
            {this.state.booklist.map(book => (
              <div className="col-4 col-sm-3 col-md-2 noPaddMar" key={book}>
                {" "}
                {this.state.key === "bookname6" ? (
                  <NavLink to="/ereader">
                    <Bookcard />{" "}
                  </NavLink>
                ) : (
                  <NavLink to="/ereader">
                    <Bookcard />
                  </NavLink>
                )}
                {book}{" "}
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
