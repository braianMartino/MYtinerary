import React, { Component } from 'react';
import './css/home.css';
import Header from './Header.js';
import StartBrowsing from './StartBrowsing.js';
import Carousell from './carousel';

class Home extends Component {

  render() {
    return (
        <div className="home">
          <Header></Header>
          <StartBrowsing></StartBrowsing>
          <Carousell></Carousell>
        </div>
    );
  }
}

export default Home;
