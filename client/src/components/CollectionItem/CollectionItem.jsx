import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

// JS Rendered Styles

import {
  CollectionItemContainer,
  CollectionItemImgWrp,
  CollectionItemImg,
  CollectionItemBtn,
  CollectionItemContent,
  CollectionItemName,
  CollectionItemPrice
} from "./CollectionItemStyles";

const CollectionItem = ({ item, addItem }) => {
  const { id, imageUrl, name, price } = item;
  return (
    <CollectionItemContainer id={id}>
      <CollectionItemImgWrp>
        <CollectionItemImg src={imageUrl} alt="product presentation" />
        <CollectionItemBtn href="/" onClick={() => addItem(item)}>
          Add to Cart
        </CollectionItemBtn>
      </CollectionItemImgWrp>

      <CollectionItemContent>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>${price}</CollectionItemPrice>
      </CollectionItemContent>
    </CollectionItemContainer>
  );
};

export default connect(null, { addItem })(CollectionItem);
