import "./CartDropdown.scss";
import React from "react";

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart-actions";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";

import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";

const CartDropdown = ({
  cartItems,
  toggleCartDropdown
}) => {
  return (
    <div className="cartDropdown">
      <div
        className="cartDropdown__toggler"
        onClick={toggleCartDropdown}
      >
        &#10006;
      </div>
      <div className="cartDropdown__items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <div className="cartDropdown__btnWrapper">
        <CustomButton
          styles="cartDropdown__button"
          type="button"
        >
          Go To Checkout
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(
  mapStateToProps,
  { toggleCartDropdown }
)(CartDropdown);
