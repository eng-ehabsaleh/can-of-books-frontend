import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/home">🏠 HOME 🏠</Navbar.Brand>
            <Navbar.Brand href="/profile">🚶 PROFILE 🚶</Navbar.Brand>
            <Navbar.Brand href="/books">📚 BEST BOOKS 📚</Navbar.Brand>
          </Container>
          <Button variant="primary">Logout</Button>
        </Navbar>
      </div>
    );
  }
}

export default Header;
