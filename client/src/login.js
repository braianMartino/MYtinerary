import React, { Component } from 'react';
import Menu1 from './menu1.js';
import Menu2 from './menu2.js';

class Login extends Component {

  render() {
    return (

        <div>
            <Menu1></Menu1>
            <Menu2></Menu2>
            <h1>LOG IN</h1>
        </div>
    );
  }
}

export default Login;