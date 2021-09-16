import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./Login.css";
import LoginButton from "./LoginButton";
export class Login extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Log In</Card.Title>
            <Card.Text>Click Below to Log In</Card.Text>

            <LoginButton />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
