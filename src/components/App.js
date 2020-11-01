import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }
  // handleInterval = () => {
  //   this.setState({ currentTime: new Date() });
  // };
  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ currentTime: new Date() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.currentTime.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default App;
