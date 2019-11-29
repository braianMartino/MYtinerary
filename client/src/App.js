import Login from "./login.js";
import Create from "./create.js";
import Cities from "./cities.js";
import Home from "./home";
import NotFoundPage from "./notFoundPage.js";

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import City from "./city.js";
import Itinerary from "./itinerary.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/create" component={Create} />
            <Route path="/cities" component={Cities} />
            <Route path="/city/:id" component={City} />
            <Route path="/itineraries/:id/:ciudad?/:idCity?" component={Itinerary} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
