import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminMembership from "./js/components/AdminMembershipPage/AdminMembership"
import Home from "./js/components/Home/Home";
import Books from "./js/components/Books/Books";
import Login from "./js/components/LoginPage/Login";
import SignUp from "./js/components/RegisterPage/SignUp";
import ForgotSignIn from "./js/components/ForgotSignIn/ForgotSignIn";
import ArticleReader from "./js/components/Articles/ArticleReader";
import VideoPlayer from "./js/components/Articles/VideoPlayer";
import AdminMembershipDisplay from "./js/components/AdminMembershipPage/AdminMembershipDisplay";
import main from "./js/components/Main_Menu/Main";
import collection from "./js/components/CollectionsPage/Collection";
class App extends Component {
  render() {
    var loc_navBarTitle = "KnowYourNation";
    var loc_navbarItems = [true, true, true, true];
    return (
      <div className="app">
        <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={SignUp} />
              <Route path="/resetpassword" component={ForgotSignIn} />
               <Route path="/collection" component={collection} />
              <Route path="/main" component={main}/>
              <Route path="/books" component={Books} />
              <Route path="/ereader" component={ArticleReader} />
              <Route path="/videoplayer" component={VideoPlayer} />
              <Route path="/AdminMembership" component={AdminMembership}/>
              <Route path="/AdminMembershipDisplay" component={AdminMembershipDisplay}/>
              <Route component={Home} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
