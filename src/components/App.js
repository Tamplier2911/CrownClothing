import "./App.scss";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../components/Header/Header";

import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignInPage from "../pages/SignInPage/SignInPage";

import {
  auth,
  createUserProfileDocument
} from "../firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(
            userAuth
          );
          userRef.onSnapshot(snapShot =>
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          );
        } else {
          this.setState({ currentUser: userAuth });
        }
        // this.setState({ currentUser: userAuth });
        // console.log(userAuth);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }

  componentDidUpdate() {}

  HatsPage = () => {
    return (
      <div>
        <h1>Hats</h1>
      </div>
    );
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <Header currentUser={this.state.currentUser} />
        <div className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/sign-in" component={SignInPage} />
            <Route path="/hats" component={this.HatsPage} />
          </Switch>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
