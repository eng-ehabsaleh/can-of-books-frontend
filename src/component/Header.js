import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { withAuth0 } from "@auth0/auth0-react";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/home">🏠 HOME 🏠</Navbar.Brand>
            {isAuth && (
              <Navbar.Brand href="/profile">🚶 PROFILE 🚶</Navbar.Brand>
            )}

            <Navbar.Brand href="/books">📚 BEST BOOKS 📚</Navbar.Brand>
            {isAuth ? <LogoutButton /> : <LoginButton />}
          </Container>
          <Button variant="primary">Logout</Button>
        </Navbar>
      </div>
    );
  }
}

export default withAuth0(Header);
