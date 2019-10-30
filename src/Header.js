import React, { Component } from 'react';
import logo from './img/MYtineraryLogo.png';
import './css/header.css';
import Menu1 from './menu1';
import Menu2 from './menu2';
class Header extends Component {

  render() {
  return (
        <header className="header">
          <Menu1></Menu1>
          <Menu2></Menu2>
          <img src={logo} alt="logo" className="header-logo"/>
        </header> 
    );
  }
}

export default Header;
