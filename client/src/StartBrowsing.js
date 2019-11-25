import React, { Component } from "react";
import "./css/App.css";
import "./css/StartBrowsing.css";
import logo from "./img/circled-right-2.png";
import { Link } from "react-router-dom";

class StartBrowsing extends Component {
  render() {
    return (
      <div className="browsing">
        <div>
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
          <div>
            <div>
              <Link to="/cities">
                <img src={logo} alt="browsing" className="browsing-logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartBrowsing;
