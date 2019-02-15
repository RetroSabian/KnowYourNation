
import React, { Component } from "react";
import "./Collection.scss";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

class collection extends Component {
  

  render() {
        let loc_navBarTitle = "KnowYourNation";
        let loc_navbarItems = [true, true, true, true];
    return (
        <div>
           <nav className="collection">
           <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
                    <nav horizontal>
                        <navItem>
                                <NavLink to="/Books" >Books</NavLink>
                        </navItem><hr />
                        <navItem>
                                <NavLink to="/">Articles</NavLink>
                        </navItem><hr />
                        <navItem>
                                <NavLink to="/">Comics</NavLink>
                        </navItem><hr />
                        <navItem>
                                <NavLink to="/">Animation</NavLink>
                        </navItem><hr />
                    
                    </nav>

           </nav>
        </div>
    );
  }
}

export default collection;
