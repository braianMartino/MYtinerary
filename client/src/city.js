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
        console.log(data);
      });
  }

  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.state.city.ciudad}</h1>
          
          <div>
            {this.state.itinerario.map(it => {
                return (
                  <ul key={it._id}>
                        <li>{it.title}</li>
                        <li>{it.profilePic}</li>
                        <li>{it.price}</li>
                  </ul>
                );
              })}
          </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default City;
