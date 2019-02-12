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
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID
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
    render()
    {
        let loc_navBarTitle = "MEMBER REGISTRATION";
        let loc_navbarItems = [true, true, true, true];
        return (
            <div className="SignUp">
                <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
                <div className="container ">
                    <div className="row marginTop20px ">
                            <h3 className="marginLeft20px">Register</h3>
                    </div>
                    <div className="row ">
                        <div className="col-12 marginTop20px">
                            <label >Name</label>
                            <span><input className="formInput" type="text" value="jack"/></span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Surname</label>
                            <span><input className="formInput" type="text" value="Shack"/></span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >E-mail</label>
                            <span><input className="formInput" type="text" value="Jackshack@gmail.com"/></span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Phone no</label>
                            <span><input className="formInput" type="phone" value="(076) 204 5876"/></span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Password</label>
                            <span>
                                <input className="formInput" type="password" value="password"/>
                            </span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Organisation</label>
                            <span><input className="formInput" type="text" value="Optional"/></span>
                        </div>
                         <div className="col-12 marginTop20px">
                            <label >Or Register with </label>
                            <span>
                                {this.state.isSignedIn ?(  
                                    RegisterUser(firebase.auth().currentUser.displayName," ",firebase.auth().currentUser.uid,firebase.auth().currentUser.email,firebase.auth().currentUser.phoneNumber," "),                                    
                                    <Redirect to='/home'/>
                                    ) :(
                                <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
                                )}
                                <button className="btnLoginOptions facebook"><i className="fab fa-facebook-f"></i></button>
                                <button className="btnLoginOptions google"><i className="fab fa-google"></i></button>
                                <button className="btnLoginOptions twitter"><i className="fab fa-twitter"></i></button>
                            </span>
                        </div>
                        
                        <div className="col-12 marginTop30px">
                            <span><label> Membership type</label></span>
                            <div className="divMembershipType">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane container active" id="home">...</div>
                                    <div className="tab-pane container fade" id="menu1">...</div>
                                    <div className="tab-pane container fade" id="menu2">...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
