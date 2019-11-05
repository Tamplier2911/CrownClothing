import "./CollectionOverview.scss";
import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsAsArray } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../CollectionPreview/CollectionPreview";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="shopOverview">
      <h1 className="shopOverview__title">Collections</h1>
      {collections.map(({ id, ...collectionProps }) => {
        return (
          <CollectionPreview
            key={id}
            {...collectionProps}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsAsArray
});

export default connect(mapStateToProps)(CollectionOverview);
