import React, { Component } from "react";
import Footer from "./footer.js";
import "./css/city.css";
import { Link } from "react-router-dom";

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
      });
  }

  render() {
    console.log(this.state.itinerario);
    return (
      <div className="cities">
        <div className="li">
          <div className="city">{this.state.city.ciudad}</div>
        </div>

        <div>
          <p>Available MYtineraries:</p>
        </div>

        <div>
          {this.state.itinerario.map(it => {
            return (
              <div className="FAQ">
                <a href="#hide1" className="hide" id="hide1">
                  View All
                </a>
                <a href="#show1" className="show" id="show1">
                  Close
                </a>
                <div className="question">
                  <Link to={`/itineraries/${it._id}`} key={it._id}>
                    <div key={it._id}>
                      <div>{it.title}</div>
                      <div>{it.profilePic}</div>
                      <div>{it.price}</div>
                    </div>
                  </Link>
                </div>
                <div className="list">
                  {this.state.itinerario.map(it => {
                    return (
                      <Link to={`/itineraries/${it._id}`} key={it._id}>
                        <div key={it._id}>
                          <div>{it.nameActivities}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default City;
