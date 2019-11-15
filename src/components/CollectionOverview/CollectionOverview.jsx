import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsAsArray } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../CollectionPreview/CollectionPreview";

// JS Rendering CSS
import {
  CollectionOverviewContainer,
  CollectionOverviewTitle
} from "./CollectionOverviewStyles";

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      <CollectionOverviewTitle>Collections</CollectionOverviewTitle>
      {collections.map(({ id, ...collectionProps }) => {
        return <CollectionPreview key={id} {...collectionProps} />;
      })}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsAsArray
});

export default connect(mapStateToProps)(CollectionOverview);
