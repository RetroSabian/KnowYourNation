import React, { Component } from "react";
import Mapbuttons from "./Countries";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Home.scss";
import  Navbuttons  from "../Fragments/Navbuttons";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class Home extends Component {

  constructor() {
    super();
    this.state = { center: [0, 0] };
  }

  state={isSignedIn:false}

  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })     
    })
  }

  
  

  render() {
    let loc_navBarTitle = "KnowYourNation";
    let loc_navbarItems = [false, true, true, false];


    return (
      <div className="home">
        <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
        {this.state.isSignedIn?(  
          <span>    
		<button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            	<h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          </span>          
        ) :(
          <div/>               
        )}
        <NavLink to="/Books">
          <button className="btn btn-success"> Books </button>
        </NavLink>
        <Mapbuttons />
        <Navbuttons/>
      </div>
    );
  }
}

export default Home;
