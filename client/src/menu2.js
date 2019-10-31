import React, { Component } from 'react';
import logo from './img/menu.png';
import './css/menu2.css';
import {
  Link
} from "react-router-dom";

class Menu2 extends Component {
  render() {
    return (
      <div className="menu2">
        <img src={logo} alt="logo" className="menus-logo2" data-toggle="dropdown"/>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
         
          <Link to="/" className="dropdown-item">Home</Link>
         
        </div>
      </div>
    );
  }
}

export default Menu2;