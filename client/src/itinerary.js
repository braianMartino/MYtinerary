import React, { Component } from "react";
import Footer from "./footer.js";
import Activity from "./activity.js";
import "./css/itinerary.css";
import logo from "./img/GaudiLover.png";
import { Link } from "react-router-dom";

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itinerary: {},
      activities: [],
      id: this.props.match.params.id,
      ciudad: this.props.match.params.ciudad,
      idCity: this.props.match.params.idCity
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/itineraries/" + this.state.id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ activities: data.activities });
        this.setState({ itinerary: data });
      });
  }

  render() {
    console.log(this.state.itinerary)
    return (
      <div className="citiI">
        <div className="lisI">
          <div className="ciudadI">{this.state.ciudad}</div>
        </div>
        <div>
          <p>Available MYtineraries:</p>
        </div>
        <div>
          <div className="tarjetaI">
            <div className="usuarioI">
              <div className="foto">
                <img src={logo} alt="logo" />
              </div>
              <div>{this.state.itinerary.profilePic}</div>
            </div>
            <div className="datosI">
              <div className="tituloI">{this.state.itinerary.title}</div>
              <div className="datos2I">
                <div className="likesI">Likes: {this.state.itinerary.rating}</div>
                <div className="durationI">{this.state.itinerary.duration} Hours</div>
                <div className="priceI">{this.state.itinerary.price}</div>
                <div>{this.state.itinerary.hashtag}</div>
              </div>
            </div>

            <div>
              {this.state.activities.map(it => {
                return (
                  <div key={it._id}>
                    <p>{it.title}</p>
                  </div>
                );
              })}
            </div>

            <div className="footerI" >
              <Link to={`/city/${this.state.idCity}`}>
                <p>Close</p>
              </Link>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div >
    );
  }
}

export default Itinerary;
