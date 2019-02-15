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

    bookid: "bookname3"
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
                {this.state.bookid === book ? (
                  <NavLink to="/ereader">
                    <Bookcard />{" "}
                  </NavLink>
                ) : (
                  <Bookcard />
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
