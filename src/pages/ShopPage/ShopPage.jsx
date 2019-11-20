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

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = await convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionMap);
      // console.log(collectionMap);
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
      </ShopPageContainer>
    );
  }
}

// const ShopPage = ({ match }) => {
//   return (
//     <ShopPageContainer>
//       <Route exact path={`${match.path}`} component={CollectionOverview} />
//       <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
//     </ShopPageContainer>
//   );
// };

export default connect(null, { updateCollection })(ShopPage);
