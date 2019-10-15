import "../styles/App.scss";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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

  HatsPage = () => {
    return (
      <div>
        <h1>Hats</h1>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="header">Header</div>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/hats" component={this.HatsPage} />
          </Switch>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
