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
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            email: "",
            phone: "",
            password: "",
            organisation: ""
        };
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
       let result = RegisterUser(this.state.name, this.state.surname, this.state.password, this.state.email, this.state.phone, this.state, this.organisation);
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
                            <span><input className="formInput" type="text" value={this.state.inputValue} onChange={evt => this.updateNameValue(evt)}/></span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Surname</label>
                            <span><input className="formInput" type="text" value={this.state.inputValue} onChange={evt => this.updateSurnameValue(evt)}/></span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >E-mail</label>
                            <span><input className="formInput" type="text" value={this.state.inputValue} onChange={evt => this.updateEmailValue(evt)}/></span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Phone no</label>
                            <span><input className="formInput" type="phone" value={this.state.inputValue} onChange={evt => this.updatePhoneValue(evt)}/></span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Password</label>
                            <span>
                                <input className="formInput" type="password" value={this.state.inputValue} onChange={evt => this.updatePasswordValue(evt)}/>
                            </span>
                        </div>
                        <div className="col-12 marginTop20px">
                            <label >Organisation</label>
                            <span><input className="formInput" type="text" value={this.state.inputValue} onChange={evt => this.updateOrganisationValue(evt)}/></span>
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
                            </span>
                        </div>
                        <div className="col-12 margin-top-30">
                            <span><label> Membership type</label></span>
                            <div className="divMembershipType">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item  ">
                                        <a className="noBackground nav-link active border-0 " data-toggle="tab" href="#home"><b>Free</b><br/> 0/month</a>
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
                                    <div className="tab-pane container active" id="home"><p>Some interesting information, when I say interesting I mean really interesting</p></div>
                                    <div className="tab-pane container" id="menu1"><p>Thought I found a way , Isn't it lovely say interesting I mean really interesting</p></div>
                                    <div className="tab-pane container" id="menu2"><p>I really enjoy read</p></div>
                                    <div className="tab-pane container" id="menu3"><p>This text is a text for the know your nation memebership or speedy information</p></div>
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
