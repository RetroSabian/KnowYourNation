import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
/*
  loc_navBarTitle: String passed to object for the title
navbarItems: Visibility of the search, user and (bars / cross) icons.
*/
class deleteme extends Component {
    render() {
        let jwt = require('jsonwebtoken');
        jwt.sign({ foo: 'bar' }, "n", { algorithm: 'RS256' }, function(err, token) {
            console.log(token);
        });
        return (
            <h3>DELETEME</h3>

        );
    }
}
export default deleteme;
