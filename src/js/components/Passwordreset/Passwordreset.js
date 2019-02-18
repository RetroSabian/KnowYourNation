import React, { Component } from "react";
import "./Passwordreset.scss";
import Navbar from "../Navbar/Navbar";
import Reset from "./subcomponents/Reset";
import Prompt from "./subcomponents/Prompt";

class Passwordreset extends Component {
    render() {
        let loc_navBarTitle = "PASSWORD RESET";
        let loc_navbarItems = [true, true, true, true];

        return (
            <div className="login">
                <Navbar titleFromParent={loc_navBarTitle} navbarItems={loc_navbarItems}/>
                <div className="container-fluid ">
                    <div className="row margin-top-20 ">
                        <h4 className="margin-left-20">Reset Password</h4>
                    </div>
                    <Prompt/>
                </div>
            </div>
        );
    }
}

export default Passwordreset;
