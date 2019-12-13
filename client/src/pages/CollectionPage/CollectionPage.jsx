import React from "react";

import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop-selectors";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

// JS Rendering CSS
import {
  CollectionPageContainer,
  CollectionPageTitle,
  CollectionPageBlock,
  CollectionPageNotFound
} from "./CollectionPageStyles";

const CollectionPage = ({ collection }) => {
  if (collection) {
    const { items, title } = collection;
    return (
      <CollectionPageContainer>
        <CollectionPageTitle>{title}</CollectionPageTitle>
        <CollectionPageBlock>
          {items.map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
        </CollectionPageBlock>
      </CollectionPageContainer>
    );
  } else {
    return <CollectionPageNotFound>Page not found 404!</CollectionPageNotFound>;
  }
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
