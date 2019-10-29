import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import StartBrowsing from './StartBrowsing.js';
import Carousell from './carousel';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Header></Header>
          <StartBrowsing></StartBrowsing>
          <Carousell></Carousell>
        </div>
    );
  }
}

export default App;
