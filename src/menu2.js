import React, { Component } from 'react';
import logo from './menu.png';
import './menu2.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Menu2 extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="logo" className="menus-logo2" data-toggle="dropdown"/>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
         
          <Link to="/" className="dropdown-item">Home</Link>
         
        </div>
      </div>
    );
  }
}

export default Menu2;