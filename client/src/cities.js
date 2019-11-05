import React, { Component } from 'react';
import Footer from './footer.js';
import './css/cities.css';
import {
  Link
} from "react-router-dom";

class Cities extends Component {

  constructor(props){
    super(props);
    this.state= {
      cities:[]
    }
  }
  componentDidMount(){
    fetch("http://localhost:8080/cities").then((res)=>{
      return res.json();
    }).then((data)=>{
      this.setState({cities:data})
    })
  }

  render() {
    console.log(this.props)
    return (

        <div className="cities">
            <h1>CITIES</h1>
            <div>
            {this.state.cities.map((city)=>{
              return (
                <Link to={`/city/${city._id}`} key={city._id}>
                  
                <div  className="li">
                  <div className="city">
                    {city.ciudad}
                  </div>
                </div>
                </Link>
              )
            })}
          </div>
          <Footer></Footer>
        </div>
    );
  }
}

export default Cities;