import "./CartDropdown.scss";
import React from "react";

import { connect } from "react-redux";

import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cartDropdown">
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

const mapStateToProps = state => ({
  cartItems: state.cartDropdown.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
