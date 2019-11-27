import React, { Component } from "react";
import Footer from "./footer.js";
import Activity from "./activity.js";

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itinerary: {},
      id: this.props.match.params.id
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/itineraries/" + this.state.id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ itinerary: data.activities });
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.itinerary.length === 0 &&
            this.state.itinerary[0] &&
            this.state.itinerary[0].map(act => {
              return (
                <ul key={act._id}>
                  <li>{act.title}</li>
                  <li>{act.description}</li>
                </ul>
              );
            })}
          {this.state.itinerary.length > 0 &&
            this.state.itinerary.map(act => {
              return (
                <ul key={act._id}>
                  <li>{act.title}</li>
                  <li>{act.description}</li>
                </ul>
              );
            })}
        </div>
        <Activity actividades={this.state.itinerary}></Activity>
        <Footer></Footer>
      </div>
    );
  }
}

export default Itinerary;
