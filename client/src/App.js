// import "./App.scss";
// import React, { Component } from "react";
import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selectors";

import Header from "./components/Header/Header.jsx";
// import HomePage from "./pages/HomePage/HomePage";
// import ShopPage from "./pages/ShopPage/ShopPage";
// import SignInPage from "./pages/SignInPage/SignInPage";
// import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Footer from "./components/Footer/Footer";

import { LazzySpinner } from "./components/Spinner/Spinner";

// import {
//   auth,
//   createUserProfileDocument
//   addCollectionAndDocuments
// } from "./firebase/firebase.utils";

// JS Rendering CSS
import { AppContainer, AppMain } from "./AppStyles";

// import { selectShopCollectionsAsArray } from "./redux/shop/shop-selectors";

// implementation of code-splitting with React.lazy and <Suspense/> component
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const CheckOutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <AppContainer>
      <Header />
      <AppMain>
        <Switch>
          <Suspense fallback={<LazzySpinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckOutPage} />
            <Route
              exact
              path="/sign-in"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInPage />
              }
            />
            <Route exact path="/contact" component={ContactsPage} />
          </Suspense>
        </Switch>
      </AppMain>
      <Footer />
    </AppContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { checkUserSession })(App);

/*

class App extends Component {
  // unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();

    // const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot =>
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })
    //     );
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // });
  }

  componentWillUnmount() {
    // this.unsubscribeFromAuth = null;
    // this.unsubscribeFromAuth();
  }

  componentDidUpdate() {}

  render() {
    const { currentUser } = this.props;
    // const { currentUser, collectionsArray } = this.props;
    // addCollectionAndDocuments(
    //   "collectionsTestDrive",
    //   collectionsArray.map(({ title, items }) => ({ title, items }))
    // );
    return (
      <AppContainer>
        <Header />
        <AppMain>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/sign-in"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInPage />
              }
            />
            <Route exact path="/contact" component={ContactsPage} />
          </Switch>
        </AppMain>
        <Footer />
      </AppContainer>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray: selectShopCollectionsAsArray
});

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { checkUserSession }
)(App);

*/
