import React, { Component } from 'react';
import Menu1 from './menu1.js';
import Menu2 from './menu2.js';
import './css/cities.css';

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
    return (

        <div className="cities">
            <Menu1></Menu1>
            <Menu2></Menu2>
            <h1>CITIES</h1>
            <ul>
            {this.state.cities.map((city)=>{
              return (
                <li key={city._id}>
                  {city.ciudad}
                </li>
            
              )
            })}
          </ul>
        </div>
    );
  }
}

export default Cities;