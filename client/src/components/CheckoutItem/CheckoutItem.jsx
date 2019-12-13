import React from "react";

import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  decrementQuantity
} from "../../redux/cart/cart-actions";

// JS Rendering Styles
import {
  CheckoutItemContainer,
  CheckoutItemImgWrp,
  CheckoutItemImg,
  CheckoutItemDesc,
  CheckoutItemQuan,
  CheckoutItemChevron,
  CheckoutItemQuanNumber,
  CheckoutItemRemove,
  CheckoutItemPrice
} from "./CheckoutItemStyles";

const CheckoutItem = ({ cartItem, removeItem, addItem, decrementQuantity }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImgWrp>
        <CheckoutItemImg src={imageUrl} alt="item"></CheckoutItemImg>
      </CheckoutItemImgWrp>
      <CheckoutItemDesc>{name}</CheckoutItemDesc>
      <CheckoutItemQuan>
        <CheckoutItemChevron onClick={() => decrementQuantity(cartItem)}>
          &#x3c;
        </CheckoutItemChevron>
        <CheckoutItemQuanNumber>{quantity}</CheckoutItemQuanNumber>
        <CheckoutItemChevron onClick={() => addItem(cartItem)}>
          &#x3e;
        </CheckoutItemChevron>
      </CheckoutItemQuan>
      <CheckoutItemPrice>${price}</CheckoutItemPrice>
      <CheckoutItemRemove onClick={() => removeItem(cartItem)}>
        &#10006;
      </CheckoutItemRemove>
    </CheckoutItemContainer>
  );
};

export default connect(null, { removeItem, addItem, decrementQuantity })(
  CheckoutItem
);
