import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import {Redirect} from "react-router-dom";
import StyledFirebaseAuth from "../RegisterPage/SignUp";
import {RegisterUser} from "../../services/apiservice";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
  
class  ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
    
        // this.handleClick = this.handleClick.bind(this);
      }
    
      updateEmailValue(evt) {
        this.setState({email: evt.target.value});
      }
      updatePasswordValue(evt) {
        this.setState({password: evt.target.value});
      }
    
      handleClick() {
        // console.log(this.state.name);
        let result = RegisterUser(this.state.password, this.state.email);
        console.log(result);
      }
    
      render() {
        let loc_navBarTitle = "Reset Password";
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
                  <label >Password</label>
                  <span><input className="form-input" type="text" /></span>
                </div>
                <div className="col-12 margin-top-20">
                  <label >Password</label>
                  <span>
                      <input className="form-input" type="password" value={this.state.inputValue} onChange={evt => this.updatePasswordValue(evt)}/>
                  </span>
                </div>
              </div>
                <div className="row display-flow-root border-danger">
                  <NavLink to="/home">
                    <button className="btn-login" onClick={this.handleClick.bind(this)}>Reset Password</button>
                  </NavLink>
                </div>
    
            </div>
          </div>
        );
      }
    
}

export default ResetPassword;
