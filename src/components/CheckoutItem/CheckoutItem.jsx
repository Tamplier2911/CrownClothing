import "./CheckoutItem.scss";
import React from "react";

const CheckoutItem = ({
  cartItem: { imageUrl, name, quantity, price }
}) => {
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
        {quantity} x
      </div>
      <div className="checkoutItem__price">${price}</div>
      <div className="checkoutItem__remove">&#10006;</div>
    </div>
  );
};

export default CheckoutItem;
