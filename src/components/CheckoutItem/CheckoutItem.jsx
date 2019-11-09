import "./CheckoutItem.scss";
import React from "react";

import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  decrementQuantity
} from "../../redux/cart/cart-actions";

const CheckoutItem = ({
  cartItem,
  removeItem,
  addItem,
  decrementQuantity
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  // console.log(cartItem);
  return (
    <div className="checkoutItem">
      <div className="checkoutItem__imageWrapper">
        <img
          className="checkoutItem__image"
          src={imageUrl}
          alt="item"
        ></img>
      </div>
      <div className="checkoutItem__description">
        {name}
      </div>
      <div className="checkoutItem__quanity">
        <div
          className="checkoutItem__chevron"
          onClick={() => decrementQuantity(cartItem)}
        >
          &#x3c;
        </div>
        <span className="checkoutItem__quanity--number">
          {quantity}
        </span>
        <div
          className="checkoutItem__chevron"
          onClick={() => addItem(cartItem)}
        >
          &#x3e;
        </div>
      </div>
      <div className="checkoutItem__price">${price}</div>
      <div
        className="checkoutItem__remove"
        onClick={() => removeItem(cartItem)}
      >
        &#10006;
      </div>
    </div>
  );
};

export default connect(
  null,
  { removeItem, addItem, decrementQuantity }
)(CheckoutItem);
