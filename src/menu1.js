import React, { Component } from 'react';
import logo from './img/profile.png';
import './css/menu1.css';
import {
  Link
} from "react-router-dom";

class Menu1 extends Component {
  render() {
    return (
      <div className="menu1">
          <img src={logo} alt="logo" className="menus-logo1" data-toggle="dropdown"/>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           
            <Link to="/create" className="dropdown-item">Create Account</Link>
            <Link to="/login" className="dropdown-item">Log in</Link>

        </div>
      </div>
    );
  }
}

export default Menu1;