import React, { Component } from 'react';
import './css/LogCreate.css';
import {
    Link
  } from "react-router-dom";

class LogCreate extends Component {

  render() {
    return (

        <div className="logcreate">

            <p className="texto-logcreate">Want to build your own MYtinerary?</p>

            <div className="linkUno">
                <Link to="/login">Log in</Link>
            </div>
            <div className="linkDos">
                <Link to="/create">Create Account</Link>
            </div>
        </div>
    );
  }
}

export default LogCreate;