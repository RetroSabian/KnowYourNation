import React, { Component } from "react";

class Reset extends Component {
    render() {
        let loc_navBarTitle = "PASSWORD RESET";
        let loc_navbarItems = [true, true, true, true];

        return (
                <div className="container-fluid ">
                    <div className="row ">
                        <div className="col-3 margin-top-10">
                            <label >New Password</label>
                        </div>
                        <div className="col-9 margin-top-20">
                            <span><input className="form-input" type="text" /></span>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-3 margin-top-10">
                            <label> Confirm Password</label>
                        </div>
                        <div className="col-9 margin-top-20">
                            <span><input className="form-input" type="text" /></span>
                        </div>
                    </div>
                    <div className="row display-flow-root border-danger margin-top-20">
                        <button className="btn-login">Reset</button>
                    </div>
                </div>
        );
    }
}

export default Reset;
