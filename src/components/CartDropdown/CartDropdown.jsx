import "./CartDropdown.scss";
import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart-actions";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";

import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";

const CartDropdown = ({
  cartItems,
  toggleCartDropdown,
  history
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
        {cartItems.length > 0 ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="cartDropdown__empty">
            Your cart is empty...
          </div>
        )}
      </div>
      <div className="cartDropdown__btnWrapper">
        <CustomButton
          styles="cartDropdown__button"
          type="button"
          onClick={() => {
            history.push("/checkout");
            toggleCartDropdown();
          }}
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

const connectedCartDropdown = connect(
  mapStateToProps,
  { toggleCartDropdown }
)(CartDropdown);

export default withRouter(connectedCartDropdown);
