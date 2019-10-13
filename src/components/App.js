import "../styles/App.scss";
import React, { Component } from "react";
// import Layout from "./layout/Layout";
import Homepage from "../pages/Homepage/Homepage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className="container">
        <div className="header">Header</div>
        <div className="main">
          <Homepage />
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
