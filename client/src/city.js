import React, { Component } from "react";
import Footer from "./footer.js";
import "./css/cities.css";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: {},
      id: this.props.match.params.id,
      itinerario: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/cities/" + this.state.id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ city: data });
        this.setState({ itinerario: data.itineraries });
        console.log(data.itineraries);
      });
  }

  render() {
    console.log(this);
    return (
      <div className="cities">
        <h1>City</h1>
        <ul>
          <li className="li">{this.state.ciudad}</li>
          <li className="li">
            {this.state.itinerario.length === 0 &&
              this.state.itinerario[0] &&
              this.state.itinerario[0].map(it => {
                return (
                  <div key={it._id}>
                    <div className="li">
                      <div className="city">{it.title}</div>
                    </div>
                  </div>
                );
              })}
          </li>
        </ul>
        <Footer></Footer>
      </div>
    );
  }
}

export default City;
