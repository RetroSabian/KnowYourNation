import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import FormGroup from "react-bootstrap/FormGroup";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormLabel from "react-bootstrap/FormLabel";
import Navbar from "../Navbar/Navbar";
import "./LoginForm.scss";
import "./Buttons.scss";
import "./PasswordEyeIcon.css";
import "./SocialMediaButtons.scss";

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
      email: "",
      password: "",
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
    } else if (!isLength(formData.password, { gte: 4, lte: 16, trim: true })) {
      errors.password = "Password's length must be between 4 to 16 characters";
    }

    this.setState({
      email: formData.email,
      password: formData.password
    });

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
    var navBarTitle = "Login";
    var navbarItems = [true, true, true, true];

    const { errors, formSubmitted } = this.state;

    return (
      <div>
        <Navbar titleFromParent={navBarTitle} navbarItems={navbarItems} />

        <Row>
          <Form className="Login" onSubmit={this.login}>
            <h2 align="left"> Login </h2>
            <FormGroup
              controlId="email"
              validationstate={
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
              {errors.email && <Form>{errors.email}</Form>}
            </FormGroup>

            <FormGroup
              controlId="password"
              validationstate={
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
              {errors.password && <Form>{errors.password}</Form>}

              <Link to="/resetpassword">Forgot Password/Username?</Link>
            </FormGroup>

            <Button variant="primary" type="submit">
              Login
            </Button>
            <Link to="/registration">
              {" "}
              <Button variant="primary">Not Registered? Sign Up</Button>
            </Link>

            <div className="d-flex flex-column">
              <FormLabel>OR Login with </FormLabel>
              <div className="rounded-social-buttons">
                <a
                  className="social-button facebook"
                  href="login with facebook"
                />
                <a
                  className="social-button twitter"
                  href="login with twitter"
                />
                <a className="social-button google" href="login with google" />
              </div>
            </div>
          </Form>
        </Row>
      </div>
    );
  }
}

export default Login;
