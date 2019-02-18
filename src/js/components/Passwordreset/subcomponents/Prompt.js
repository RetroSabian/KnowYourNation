import React, { Component } from "react";
import "../Passwordreset.scss";
class Prompt extends Component {
    render() {
        let loc_navBarTitle = "PASSWORD RESET";
        let loc_navbarItems = [true, true, true, true];

        return (
            <div className="container-fluid ">
                <div className="row ">
                    <div className="">
                        <p classname="font-size-8px">A security code will be sent via e-mail</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 margin-top-20">
                        <label >E-mail</label>
                    </div>
                    <div className="col-9 margin-top-20">
                        <span><input className="form-input" type="text" /></span>
                    </div>
                </div>
                <div className="row display-flow-root border-danger margin-top-20">
                    <button className="btn-login">Continue</button>
                </div>
            </div>
        );
    }
}

export default Prompt;
