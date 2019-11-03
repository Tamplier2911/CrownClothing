import "./App.scss";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { setCurrentUser } from "../redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user-selectors";

import Header from "../components/Header/Header";

import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";

import {
  auth,
  createUserProfileDocument
} from "../firebase/firebase.utils";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(
            userAuth
          );
          userRef.onSnapshot(snapShot =>
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          );
        } else {
          setCurrentUser(userAuth);
        }
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
    const { currentUser } = this.props;
    console.log(currentUser);
    return (
      <div className="container">
        <Header />
        <div className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/checkout"
              component={CheckoutPage}
            />
            <Route
              exact
              path="/sign-in"
              render={() =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInPage />
                )
              }
            />
            <Route path="/hats" component={this.HatsPage} />
          </Switch>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { setCurrentUser }
)(App);
