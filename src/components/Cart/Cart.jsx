import "./Cart.scss";
import React from "react";
import { ReactComponent as CartIcon } from "../../images/svg/shopping-bag.svg";

const Cart = () => {
  return (
    <div className="cart">
      <CartIcon className="cart__icon" />
      <span className="cart__count">0</span>
    </div>
  );
};

export default Cart;
