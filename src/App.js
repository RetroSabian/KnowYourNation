import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.sass";
import Dummy from "./js/components/Dummy";
import Home from "./js/components/Home/Home";
import Navbar from "./js/components/Navbar/Navbar";
import Login from "./js/components/LoginPage/Login";
import SignUp from "./js/components/RegisterPage/SignUp";
import ForgotSignIn from "./js/components/ForgotSignIn/ForgotSignIn";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/Dummy" component={Dummy} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={SignUp} />
              <Route path="/resetpassword" component={ForgotSignIn} />
              <Route component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
