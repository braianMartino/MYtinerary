import React, { Component } from "react";
import logo from "./img/MYtineraryLogo.png";
import "./css/header.css";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="logo" className="header-logo" />
      </header>
    );
  }
}

export default Header;
