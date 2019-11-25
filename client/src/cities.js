import React, { Component } from "react";
import Footer from "./footer.js";
import "./css/cities.css";
import { Link } from "react-router-dom";
import { readCities } from "./actions/cityActions";
import { connect } from "react-redux";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/cities")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.props.dispatch(readCities(data));
      });
  }

  filterItems = query => {
    this.setState({
      cities: this.props.cities[0].filter(
        el => el.ciudad.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
    });
  };

  render() {
    return (
      <div className="cities">
        <h1>CITIES</h1>
        <div>
          <label htmlFor="filter">Filter by City: </label>
          <input
            type="text"
            id="filter"
            onChange={e => this.filterItems(e.target.value)}
          />
        </div>
        <div>
          {this.state.cities.length === 0 &&
            this.props.cities[0] &&
            this.props.cities[0].map(city => {
              return (
                <Link to={`/city/${city._id}`} key={city._id}>
                  <div className="li">
                    <div className="city">{city.ciudad}</div>
                  </div>
                </Link>
              );
            })}
          {this.state.cities.length > 0 &&
            this.state.cities.map(city => {
              return (
                <Link to={`/city/${city._id}`} key={city._id}>
                  <div className="li">
                    <div className="city">{city.ciudad}</div>
                  </div>
                </Link>
              );
            })}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state
  };
};
export default connect(mapStateToProps)(Cities);
