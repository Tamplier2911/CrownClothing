import "./Cart.scss";
import React from "react";
import { ReactComponent as CartIcon } from "../../images/svg/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart-actions";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

const Cart = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className="cart" onClick={toggleCartDropdown}>
      <CartIcon className="cart__icon" />
      <span className="cart__count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  { toggleCartDropdown }
)(Cart);
