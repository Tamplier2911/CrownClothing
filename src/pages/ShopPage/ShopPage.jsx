import React, { Component } from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

import { connect } from "react-redux";

// Shop Actions
import { updateCollection } from "../../redux/shop/shop-actions";

// Firestore
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils.js";

// JS Rendering CSS
import { ShopPageContainer } from "./ShopPageStyles";

// HOC Spinner
import Spinner from "../../components/Spinner/Spinner";
const CollectionOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends Component {
  state = {
    isLoading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = await convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionMap);

      this.setState({ isLoading: false });
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { isLoading } = this.state;
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          // component={CollectionOverview}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          // component={CollectionPage}
          render={props => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </ShopPageContainer>
    );
  }
}

export default connect(null, { updateCollection })(ShopPage);
