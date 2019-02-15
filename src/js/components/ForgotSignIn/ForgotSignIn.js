import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ForgotPassword } from "../../services/apiservice";


class ForgotSignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: '',
    };
}

GetEmail(evt) {
    this.setState({email: evt.target.value});
}

handleClick() {
    // console.log(this.state.name);
   let result = ForgotPassword(this.state.email);
   console.log(result);
}
  render() {
    return (
      <div className="ForgotSign">
          <div className="col-12 marginTop20px">
              <label >Name</label>
              <span><input className="formInput" type="text" value={this.state.GetEmail} onChange={evt => this.GetEmail(evt)}/></span>
          </div>
          <div className="col-12">
              <button className="reg-circle" onClick={this.handleClick.bind(this)}> Complete Registration</button>
            </div>
      </div>
    );
  }
}

export default ForgotSignIn;
