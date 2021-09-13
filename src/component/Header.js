import React, { Component } from "react";
import Button from "react-bootstrap/Button";
export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>
          <li>
            <a href="/">HOME </a>
          </li>
          <li>
            <a href="/ProfilePage">PROFILE</a>
          </li>
          <Button variant="primary">Logout</Button>
        </nav>
      </div>
    );
  }
}

export default Header;
