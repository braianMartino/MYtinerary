import React, { Component } from "react";
import Footer from "./footer.js";
import "./css/create.css";
// amartignago
class Create extends Component {
  constructor(props){
    super(props);
    this.state= {
      username:"",
      password:"",
      email:"",
      firstName:"",
      lastName:"",
      country:""
    };
  }

  onChange2 = name => event => {
    let value_ = name === 'image'
    ? event.target.files[0]
    : event.target.value
  
    this.setState({[name]: value_ })
  
  }

  submitForm =()=>{
  
    fetch("http://localhost:8080/user",{
      method: 'POST',
      body:JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
      }
     }).then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data)
    })
    
  }
  render() {
    return (
      <div>
        <h1>Create Account</h1>
        <div className="foto1">
          <a>Add Photo</a>
        </div>
          <div>
            <div>
                <label >Username:</label>
                <input type="text" onChange={this.onChange2('username')}/>
            </div>
            <div>
                <label >Password:</label>
                <input type="text" onChange={this.onChange2('password')}/>
            </div>
            <div>
                <label >Email:</label>
                <input type="email"  onChange={this.onChange2('email')}/>
            </div>
            <div>
                <label >First Name:</label>
                <input  onChange={this.onChange2('firstName')}/>
            </div>
            <div>
                <label >Last Name:</label>
                <input onChange={this.onChange2('lastName')}/>
            </div>
            <div>
                <label >Country:</label>
                <input onChange={this.onChange2('country')}/>
            </div>
            <div>
            <label><input type="checkbox"/> 
            I agree to MYtinerary's Terms & Conditions.</label>
            </div>
            <div>
                <button type="submit" onClick={()=>{this.submitForm()}}>OK</button>
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Create;
