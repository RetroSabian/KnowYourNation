import React, { Component } from "react";
import "./Login.scss";
import "./ButtonStyles.css";
import Navbar from "../Navbar/Navbar";
import {Redirect} from "react-router-dom";
import StyledFirebaseAuth from "../RegisterPage/SignUp";
import {RegisterUser} from "../../services/apiservice";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.change = this.change.bind(this);
  }

  change(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e){
    e.preventDefault();
    axios.post("/auth/getToken", {
      email: this.state.email,
      password: this.state.password
    }).then(localStorage.setItem('cool'))
  }

  handleClick() {
    let result = RegisterUser(this.state.name, this.state.surname, this.state.password, this.state.email, this.state.phone, this.state, this.organisation);
  }

  render() {
    let loc_navBarTitle = "LOGIN";
    let loc_navbarItems = [true, true, true, true];

    return (
      <div className="login">
        <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
        <div className="container-fluid ">
          <div className="row margin-top-20 ">
            <h4 className="margin-left-20">Login</h4>
          </div>
          <div className="row ">
            <div className="col-12 margin-top-20">
              <label >E-mail</label>
              <span><input className="form-input" type="text" value={this.state.username} onChange={evt => this.change(evt)}/></span>
            </div>
            <div className="col-12 margin-top-20">
              <label >Password</label>
              <span>
                  <input className="form-input" type="password" value={this.state.password} onChange={evt => this.change(evt)}/>
              </span>
            </div>
            <div className="col-12 margin-top-10">
              <p className="text-forgotpassword">Forgot Password/Username</p>
            </div>
          </div>
            <div className="row display-flow-root border-danger">
              <button className="btn-login" onClick={this.handleClick.bind(this)}>Login</button>
              <NavLink to="/register">
                <button className="btn-signup float-right" >Sign Up</button>
              </NavLink>
            </div>
            <div className="col-12 margin-top-30">
              <label >Or Login with </label>
              <span>
                <button className="btn-login-options facebook"><i className="fab fa-facebook-f"></i></button>
                <button className="btn-login-options google"><i className="fab fa-google"></i></button>
                <button className="btn-login-options twitter"><i className="fab fa-twitter"></i></button>
              </span>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
