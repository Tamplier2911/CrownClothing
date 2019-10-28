import "./CartItem.scss";
import React from "react";

const CartItem = ({
  item: { name, price, imageUrl, quantity }
}) => {
  return (
    <div className="cartItem">
      <div className="cartItem__imgWrapper">
        <img
          className="cartItem__img"
          alt="test"
          src={imageUrl}
        ></img>
      </div>
      <div className="cartItem__textWrapper">
        <span className="cartItem__title">{name}</span>
        <span className="cartItem__price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
