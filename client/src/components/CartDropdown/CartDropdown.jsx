import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart-actions";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";

import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";

// JS Rending Styles
import {
  CartDropdownContainer,
  CartDropdownToggler,
  CartDropdownItems,
  CartDropdownEmpty,
  CartDropdownButtonContainer
} from "./CartDropdownStyles";

const CartDropdown = ({ cartItems, toggleCartDropdown, history }) => {
  return (
    <CartDropdownContainer>
      <CartDropdownToggler onClick={toggleCartDropdown}>
        &#10006;
      </CartDropdownToggler>
      <CartDropdownItems>
        {cartItems.length > 0 ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <CartDropdownEmpty>Your cart is empty...</CartDropdownEmpty>
        )}
      </CartDropdownItems>
      <CartDropdownButtonContainer>
        <CustomButton
          styles="black"
          type="button"
          onClick={() => {
            history.push("/checkout");
            toggleCartDropdown();
          }}
        >
          Go To Checkout
        </CustomButton>
      </CartDropdownButtonContainer>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const connectedCartDropdown = connect(mapStateToProps, { toggleCartDropdown })(
  CartDropdown
);

export default withRouter(connectedCartDropdown);
