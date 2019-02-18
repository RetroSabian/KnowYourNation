import React, { Component } from "react";
import "./Profile.scss";
import Navbar from "../Navbar/Navbar";
import Navbuttons from "../Fragments/Navbuttons";

class Profile extends Component {
    render() {
        let loc_navBarTitle = "PROFILE";
        let loc_navbarItems = [true, true, true, true];

        return (
            <div className="profile">
                <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="profile-details center borderGreen">
                            <div className="center-text">
                                <p className="font-size-12px"><b>Jack Shack </b></p>
                                <p className="font-size-10px">Premium membership</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbuttons/>
            </div>
        );
    }
}

export default Profile;
