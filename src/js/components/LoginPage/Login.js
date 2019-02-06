import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import FormGroup from "react-bootstrap/FormGroup";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import FormLabel from "react-bootstrap/FormLabel";
import "./Login.sass";
import "./ButtonStyles.css";
import FacebookLoginButton from "react-social-login-buttons/lib/buttons/FacebookLoginButton";
import GoogleLoginButton from "react-social-login-buttons/lib/buttons/GoogleLoginButton";
import TwitterLoginButton from "react-social-login-buttons/lib/buttons/TwitterLoginButton";

import {
  isEmail,
  isEmpty,
  isLength,
  isContainWhiteSpace
} from "../../helpers/validator";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {}, // Contains login form data
      errors: {}, // Contains login field errors
      formSubmitted: false, // Indicates submit status of login form
      loading: false // Indicates in progress state of login form
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let { formData } = this.state;
    formData[name] = value;

    this.setState({
      formData: formData
    });
  };

  validateLoginForm = e => {
    let errors = {};
    const { formData } = this.state;

    if (isEmpty(formData.email)) {
      errors.email = "Email can't be blank";
    } else if (!isEmail(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (isEmpty(formData.password)) {
      errors.password = "Password can't be blank";
    } else if (isContainWhiteSpace(formData.password)) {
      errors.password = "Password should not contain white spaces";
    } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
      errors.password = "Password's length must between 6 to 16";
    }

    if (isEmpty(errors)) {
      return true;
    } else {
      return errors;
    }
  };

  login = e => {
    e.preventDefault();

    let errors = this.validateLoginForm();

    if (errors === true) {
      alert("You are successfully signed in...");
      window.location.reload();
    } else {
      this.setState({
        errors: errors,
        formSubmitted: true
      });
    }
  };

  render() {
    const { errors, formSubmitted } = this.state;

    return (
      <div className="Login">
        <Row>
          <Form onSubmit={this.login}>
            <FormGroup
              controlId="email"
              validationState={
                formSubmitted ? (errors.email ? "error" : "success") : null
              }
            >
              <FormLabel>Email</FormLabel>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={this.handleInputChange}
              />
              {errors.email && <Form.HelpBlock>{errors.email}</Form.HelpBlock>}
            </FormGroup>
            <FormGroup
              controlId="password"
              validationState={
                formSubmitted ? (errors.password ? "error" : "success") : null
              }
            >
              <FormLabel>Password</FormLabel>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={this.handleInputChange}
              />
              {errors.password && (
                <Form.HelpBlock>{errors.password}</Form.HelpBlock>
              )}

              <Link to="/resetpassword" className="btn btn-link">
                Forget Password or UserName?
              </Link>
              <div className="d-flex flex-column">
                <ButtonGroup className="mt-3">
                  <FormLabel>OR Login with </FormLabel>
                  <FacebookLoginButton type="submit"> </FacebookLoginButton>
                  <GoogleLoginButton type="submit"> </GoogleLoginButton>
                  <TwitterLoginButton type="submit"> </TwitterLoginButton>
                </ButtonGroup>
                <ButtonGroup className="mt-3">
                  <Button variant="primary" type="submit">
                    Sign-In
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginLeft: "5px" }}
                  >
                    Sign-Up
                  </Button>
                </ButtonGroup>
              </div>
            </FormGroup>
          </Form>
        </Row>{" "}
      </div>
    );
  }
}

export default Login;
