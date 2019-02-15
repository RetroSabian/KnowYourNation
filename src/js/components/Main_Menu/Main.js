
import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./main.scss";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

class main extends Component {
  

  render() {
        let loc_navBarTitle = "KnowYourNation";
        let loc_navbarItems = [false, true, true, true];
    return (
        <div>
           <nav className="Main">
           <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
                    <nav horizontal>
                        <navItem>
                                <NavLink to="/" >Home</NavLink>
                        </navItem><hr />
                        <navItem>
                                <NavLink to="/login">Membership</NavLink>
                        </navItem><hr />
                        <navItem>
                                <NavLink to="/collection">Collections</NavLink>
                        </navItem><hr />
                        <navItem>
                                <NavLink to="/">Donate</NavLink>
                        </navItem><hr />
                        <navItem>
                                <NavLink to="/">Volunteer</NavLink>
                        </navItem><hr />
                        <navItem>
                                <NavLink to="/">Store</NavLink>
                        </navItem><hr />
                    </nav>

           </nav>
        </div>
    );
  }
}

export default main;
