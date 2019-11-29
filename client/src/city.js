import React, { Component } from "react";
import Footer from "./footer.js";
import "./css/city.css";
import { Link } from "react-router-dom";
import logo from "./img/GaudiLover.png";

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
    console.log(this.state.city);
    return (
      <div className="citi">
        <div className="lis">
          <div className="ciudad">{this.state.city.ciudad}</div>
        </div>
        <div>
          <p>Available MYtineraries:</p>
        </div>
        <div>
          {this.state.itinerario.map(it => {
            return (
              <div className="tarjeta" key={it._id}>
                <div className="usuario">
                  <div className="foto">
                    <img src={logo} alt="logo" />
                  </div>
                  <div>{it.profilePic}</div>
                </div>
                <div className="datos">
                  <div className="titulo">{it.title}</div>
                  <div className="datos2">
                    <div className="likes">Likes: {it.rating}</div>
                    <div className="duration">{it.duration} Hours</div>
                    <div className="price">{it.price}</div>
                    <div>{it.hashtag}</div>
                  </div>
                </div>
                <div className="footer" >
                  <Link to={`/itineraries/${it._id}/${this.state.city.ciudad}/${this.state.id}`}>
                    <p>View All</p>
                  </Link></div>
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
