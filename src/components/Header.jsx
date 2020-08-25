import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  const logo = "/images/expo-logo-wh.png";

  return (
    <Navbar bg="dark">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="85"
          height="30"
          className="d-inline-block align-top"
          alt="Expo logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
