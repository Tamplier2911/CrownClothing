import "./CollectionOverview.scss";
import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop-selectors";

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
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);
