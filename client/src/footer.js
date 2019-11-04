import React, { Component } from 'react';
import logo from './img/homeIcon.png';
import './css/footer.css';
import {
  Link
} from "react-router-dom";

class Footer extends Component {

  render() {
    return (

        <footer>
            <Link to="/">
                <img src={logo} alt="home" className="footer-logo" />
            </Link>      
        </footer>
    );
  }
}

export default Footer;