import React, { Component } from "react";
import "./App.scss";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.sass";
import AdminMembership from "./js/components/AdminMembershipPage/AdminMembership"
import Home from "./js/components/Home/Home";
import Books from "./js/components/Books/Books";
import Login from "./js/components/LoginPage/Login";
import SignUp from "./js/components/RegisterPage/SignUp";
import ForgotSignIn from "./js/components/ForgotSignIn/ForgotSignIn";

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={SignUp} />
              <Route path="/resetpassword" component={ForgotSignIn} />
              <Route path="/Books" component={Books} />
              <Route path="/AdminMembership" component={AdminMembership}/>
              <Route component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;