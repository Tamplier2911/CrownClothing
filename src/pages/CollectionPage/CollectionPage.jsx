import "./CollectionPage.scss";
import React from "react";

import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop-selectors";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

const CollectionPage = ({ collection }) => {
  if (collection) {
    const { items, title } = collection;
    return (
      <div className="collectionPage">
        <h1 className="collectionPage__title">{title}</h1>
        <div className="collectionPage__container">
          {items.map(item => {
            return (
              <CollectionItem key={item.id} item={item} />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="collectionPage__notFound">
        Page not found 404!
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(
    ownProps.match.params.categoryId
  )(state)
});

export default connect(mapStateToProps)(CollectionPage);
