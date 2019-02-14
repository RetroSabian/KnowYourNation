import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./SignUp.scss";
import { Redirect } from 'react-router-dom';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {RegisterUser} from "../../services/apiservice.js";

firebase.initializeApp({

    apiKey: "AIzaSyBB0W3EuMqoeQLVuczRUCQmaWQV0HOHZQQ",
    authDomain: "knowyournation-6daac.firebaseapp.com"
  })

class SignUp extends Component {
  
   state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
        signInSuccess: () => false
        }
    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ isSignedIn: !!user })
          console.log("user", user)
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            password: '',
            organisation: '',

        };

       // this.handleClick = this.handleClick.bind(this);
    }

    updateNameValue(evt) {
        this.setState({name: evt.target.value});
    }

    updateSurnameValue(evt) {
        this.setState({surname: evt.target.value});
    }

    updateEmailValue(evt) {
        this.setState({email: evt.target.value});
    }

    updatePhoneValue(evt) {
        this.setState({phone: evt.target.value});
    }

    updatePasswordValue(evt) {
        this.setState({password: evt.target.value});
    }
    updateOrganisationValue(evt) {
        this.setState({organisation: evt.target.value});
    }

    handleClick() {
        // console.log(this.state.name);
       let result = RegisterUser(this.state.name, this.state.surname, this.state.password, this.state.email, this.state.phone, this.state, this.organisation);
       console.log(result);
    }
    render()
    {

        let loc_navBarTitle = "MEMBER REGISTRATION";
        let loc_navbarItems = [true, true, true, true];
       // RegisterUser("username", "surname", "passsword", "email", "phoneNumber", "membershipType");

        return (
            <div className="signup">
                <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
                <div className="container ">
                    <div className="row margin-top-20 ">
                            <h3 className="margin-left-20">Register</h3>
                    </div>
                    <div className="row ">
                        <div className="col-12 margin-top-20">
                            <label >Name</label>
                            <span><input className="form-input" type="text" value={this.state.inputValue} onChange={evt => this.updateNameValue(evt)}/></span>
                        </div>
                        <div className="col-12 margin-top-20">
                            <label >Surname</label>
                            <span><input className="form-input" type="text" value={this.state.inputValue} onChange={evt => this.updateSurnameValue(evt)}/></span>
                        </div>
                        <div className="col-12 margin-top-20">
                            <label >E-mail</label>
                            <span><input className="form-input" type="text" value={this.state.inputValue} onChange={evt => this.updateEmailValue(evt)}/></span>
                        </div>
                        <div className="col-12 margin-top-20">
                            <label >Phone no</label>
                            <span><input className="form-input" type="phone" value={this.state.inputValue} onChange={evt => this.updatePhoneValue(evt)}/></span>
                        </div>
                        <div className="col-12 margin-top-20">
                            <label >Password</label>
                            <span>
                                <input className="form-input" type="password" value={this.state.inputValue} onChange={evt => this.updatePasswordValue(evt)}/>
                            </span>
                        </div>
                        <div className="col-12 margin-top-20">
                            <label >Organisation</label>
                            <span><input className="form-input" type="text" value={this.state.inputValue} onChange={evt => this.updateOrganisationValue(evt)}/></span>
                        </div>
                        <div className="col-12 margin-top-30">
                            <label >Or Register with </label>
                            <span>
                                {this.state.isSignedIn ?(
                                 <Redirect to='/home' />

                                ) :(
                                <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
                                )}
                                <button className="btn-login-options facebook"><i className="fab fa-facebook-f"></i></button>
                                <button className="btn-login-options google"><i className="fab fa-google"></i></button>
                                <button className="btn-login-options twitter"><i className="fab fa-twitter"></i></button>
                            </span>
                        </div>

                        <div className="col-12 margin-top-30">
                            <span><label> Membership type</label></span>
                            <div className="div-membershiptype">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item  ">
                                        <a className="no-background nav-link active border-0 " data-toggle="tab" href="#home"><b>Free</b><br/> 0/month</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#menu1"><b>Speedy</b><br/> R20/month</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#menu2"><b>NYN</b><br/> R10/month</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#menu3"><b>Premium</b><br/> R100/month</a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane container active" id="home">Some interesting information, when I say interesting I mean really interesting</div>
                                    <div className="tab-pane container" id="menu1">Thought I found a way , Isn't it lovely say interesting I mean really interesting</div>
                                    <div className="tab-pane container" id="menu2">Some interesting information, when I say interesting I mean really interesting</div>
                                    <div className="tab-pane container" id="menu3">Some interesting information, when I say interesting I mean really interesting</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="reg-circle" onClick={this.handleClick.bind(this)}> Complete Registration</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
