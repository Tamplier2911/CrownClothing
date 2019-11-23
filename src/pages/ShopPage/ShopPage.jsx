import React, { Component } from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectShopCollections,
  selectIsCollectionFetching
} from "../../redux/shop/shop-selectors";

// Shop Actions
import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";

// JS Rendering CSS
import { ShopPageContainer } from "./ShopPageStyles";

// HOC Spinner
import Spinner from "../../components/Spinner/Spinner";
const CollectionOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends Component {
  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { match, collections, isFetching } = this.props;
    console.log(collections, isFetching);
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          // component={CollectionOverview}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          // component={CollectionPage}
          render={props => (
            <CollectionPageWithSpinner isLoading={isFetching} {...props} />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
  isFetching: selectIsCollectionFetching
});

export default connect(mapStateToProps, {
  fetchCollectionsStartAsync
})(ShopPage);
