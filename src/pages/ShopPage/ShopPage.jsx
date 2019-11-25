import React, { Component } from "react";
import { Route } from "react-router-dom";

// Containers Wrapped CollectionOverview and CollectionPage with Spinner HOC
// Aswell recieveing isLoading value from state due connect and mapStateToProps
import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../../pages/CollectionPage/CollectionPageContainer";

// Redux
import { connect } from "react-redux";

// Shop Actions
import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";

// JS Rendering CSS
import { ShopPageContainer } from "./ShopPageStyles";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
          // render={props => (
          //   <CollectionOverviewWithSpinner isLoading={!isLoaded} {...props} />
          // )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CollectionPageContainer}
          // render={props => (
          //   <CollectionOverviewContainer isLoading={!isLoaded} {...props} />
          // )}
        />
      </ShopPageContainer>
    );
  }
}

export default connect(null, {
  fetchCollectionsStartAsync
})(ShopPage);
