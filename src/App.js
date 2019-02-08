import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import "./App.sass";
import Dummy from "./js/components/Dummy";
import Home from "./js/components/Home/Home";
import Navbar from "./js/components/Navbar/Navbar";
import { Provider } from "react-redux";
import Books from "./js/components/Books/Books";
import Login from "./js/components/LoginPage/Login";
import SignUp from "./js/components/RegisterPage/SignUp";
import ForgotSignIn from "./js/components/ForgotSignIn/ForgotSignIn";
import ArticleReader from "./js/components/Articles/ArticleReader";

class App extends Component {
  render() {
    var loc_navBarTitle = "KnowYourNation";
    var loc_navbarItems = [false, true, true, true];

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/registration" component={SignUp} />
              <Route path="/resetpassword" component={ForgotSignIn} />
              <Route path="/Books" component={Books} />
              <Route path="/ereader" component={ArticleReader} />
              <Route component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
