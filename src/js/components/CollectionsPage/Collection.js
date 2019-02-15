
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

class collection extends Component {
  

  render() {
    return (
        <div>
            <h1>Menu</h1>
           <nav className="Collection">
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
