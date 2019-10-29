import React, { Component } from 'react';
import './App.css';
import './StartBrowsing.css';
import logo from './circled-right-2.png';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


class StartBrowsing extends Component {
  render() {
    return (
      
      <div className="browsing">
        <div>
        <p>
          Find your perfect trip, designed by insiders who know and love their cities.
        </p>
        <div>
          <div>
            <Link to="/cities"><img src={logo} alt="browsing" className="browsing-logo" /></Link>
          </div>
        </div></div>
      </div>
    );
  }
}

export default StartBrowsing;
