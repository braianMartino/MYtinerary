import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login.js';
import Create from './create.js';
import Cities from './cities.js';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <Router>
      <div>
        <Switch>
          <Route exact path="/" ><App/></Route>
          <Route path="/login" component={Login} />
          <Route path="/create" component={Create} />
          <Route path="/cities" component={Cities} />
        </Switch>
      </div>
    </Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
