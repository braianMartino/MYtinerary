import React, { Component } from "react";
import Footer from "./footer.js";
import "./css/cities.css";

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: {},
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/cities/" + this.state.id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ city: data });
      });
  }

  render() {
    console.log(this);
    return (
      <div className="cities">
        <h1>City</h1>
        <ul>
          <li>{this.state.city.ciudad}</li>
        </ul>
        <Footer></Footer>
      </div>
    );
  }
}

export default Itinerary;
