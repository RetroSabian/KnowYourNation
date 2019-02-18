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
import AdminMembershipDisplay from "./js/components/AdminMembershipPage/AdminMembershipDisplay";
import main from "./js/components/Main_Menu/Main";
import collection from "./js/components/CollectionsPage/Collection";
class App extends Component {
  render() {
    // var loc_navBarTitle = "KnowYourNation";
    // var loc_navbarItems = [true, true, true, true];
  
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={SignUp} />
              <Route path="/resetpassword" component={ForgotSignIn} />
              <Route path="/collection" component={collection} />
              <Route path="/main" component={main}/>
              <Route path="/books" component={Books} />
              <Route path="/AdminMembership" component={AdminMembership}/>
              <Route path="/AdminMembership/:id" render= {(props) =><AdminMembership {...props}/>}/>
              <Route path="/AdminMembershipDisplay" component={AdminMembershipDisplay}/>
              <Route component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
  