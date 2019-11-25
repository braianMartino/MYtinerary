import React, { Component } from "react";
import "./css/home.css";
import Header from "./Header.js";
import StartBrowsing from "./StartBrowsing.js";
import Footer from "./footer";
import LogCreate from "./LogCreate";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <StartBrowsing></StartBrowsing>
        <LogCreate></LogCreate>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
