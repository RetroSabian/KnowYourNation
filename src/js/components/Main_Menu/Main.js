
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

class main extends Component {
  

  render() {
    return (
        <div>
            <h1>Menu</h1>
           <nav className="ew">
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
