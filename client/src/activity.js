import React, { Component } from "react";

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Activity</p>
      </div>
    );
  }
}

export default Activity;
