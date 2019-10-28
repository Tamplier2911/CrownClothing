import "./Cart.scss";
import React from "react";
import { ReactComponent as CartIcon } from "../../images/svg/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart-actions";

const Cart = ({ toggleCartDropdown }) => {
  return (
    <div className="cart" onClick={toggleCartDropdown}>
      <CartIcon className="cart__icon" />
      <span className="cart__count">0</span>
    </div>
  );
};

export default connect(
  null,
  { toggleCartDropdown }
)(Cart);
