import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import {BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import "./App.sass";
import Dummy from "./js/components/Dummy";
import Home from "./js/components/Home/Home";
import Navbar from "./js/components/Navbar/Navbar";
import { Provider } from "react-redux";
import Books from "./js/components/Books/Books";
import Login from "./js/components/LoginPage/Login";
import SignUp from "./js/components/RegisterPage/SignUp";
import ForgotSignIn from "./js/components/ForgotSignIn/ForgotSignIn";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    // fetch('http://ereader.retrotest.co.za/api/Db')
    // .then(res => res.json())
    // .then(json => {
    //   this.setState({
    //     isLoaded: true,
    //     items: json,
    //   })
    // });

//     fetch('http://ereader.retrotest.co.za/api/Db', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     "usersId": 0,
//     "name": "NA",
//     "surname": "NA",
//     "email": "NA",
//     "phoneNumber": "NA",
//     "password": "NA",
//     "membershipType": "NA",
//   })
// })
  }

  render() {
    var loc_navBarTitle = "KnowYourNation";
    var loc_navbarItems = [false, true, true, true];

    var {isLoaded, items} = this.state;

    // if (!isLoaded){
    //   return <div>Loading...</div>;
    // }
    // else
    return (

      <div className="App">
            {/* {items.map(item => (
              <li key={item.id}>
                {item.name}
              </li>
        ))} */}
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={SignUp} />
              <Route path="/resetpassword" component={ForgotSignIn} />
              <Route path="/Books" component={Books} />
              <Route component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
