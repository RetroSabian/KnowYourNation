import React, { Component } from "react";
import FormGroup from "react-bootstrap/FormGroup";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormLabel from "react-bootstrap/FormLabel";
import "./SignUp.scss";
import Navbar from "../Navbar/Navbar";
import {RegisterUser} from "../../services/apiservice";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
    
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  /*
      This function is used to register a user, the last paramater is a default membership that indicates that the user
      create will be a 'free' user as part of our business logic.
  */
  register()
  {
    RegisterUser(this.state.name,this.state.surname,this.state.password,this.state.email,this.state.phoneNumber,"free");
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
  };

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  };

  renderConfirmationForm() {
    return (
      <Row>
        <Form onSubmit={this.handleConfirmationSubmit}>
          <FormGroup controlId="confirmationCode" bsSize="large">
            <FormLabel>Confirmation Code</FormLabel>
            <Form.Control autoFocus type="tel" value={this.state.confirmationCode} onChange={this.handleChange}/>
            <Form>Please check your email for the code.</Form>
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateConfirmationForm()}
            type="submit"
            isLoading={this.state.isLoading}
            loadingText="Verifying…">
            Verify
          </Button>
        </Form>
      </Row>
    );
  }

  renderForm() {
    return (
      <Row> 
        <Form onSubmit={this.handleSubmit}>
          <h2> Register </h2>
          <FormGroup controlId="name" bsSize="large">
            <FormLabel>Name</FormLabel>
            <Form.Control autoFocus
              type="name"
              value={this.state.name}
              placeholder="Enter your name"
              onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="surname" bsSize="large">
            <FormLabel>Surname</FormLabel>
            <Form.Control
              autoFocus
              type="surname"
              value={this.state.surname}
              placeholder="Enter your Surname"
              onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              placeholder="Enter your email"
              onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="phoneNumber" bsSize="large">
            <FormLabel>Phone Number</FormLabel>
            <Form.Control
              autoFocus
              type="phoneNumber"
              value={this.state.phoneNumber}
              placeholder="Enter your phoneNumber"
              onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="Enter your password"/>
          </FormGroup>

          <FormGroup controlId="confirmPassword" bsSize="large">
            <FormLabel>Confirm Password</FormLabel>
            <Form.Control
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
              placeholder="Confirm your password"/>
          </FormGroup>

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            loadingText="Signing up…">
            SignUp{" "}
          </Button>

        </Form>
      </Row>
    );
  }

  render() {
    var loc_navBarTitle = "KnowYourNation";
    var loc_navbarItems = [true, true, true, false];
    return (
      <div className="Signup">
        <Navbar
          titleFromParent={loc_navBarTitle}
          navbarItems={loc_navbarItems}
        />
        {this.state.newUser === null
          ? this.renderForm()
          : this.register()}

      </div>
    );
  }
}
