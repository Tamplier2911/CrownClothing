import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsPriceTotal
} from "../../redux/cart/cart-selectors";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

// stripe
import StripeButton from "../../components/StripeButton/StripeButton";

// JS Rendering CSS
import {
  CheckoutPageContainer,
  CheckoutPageTitle,
  CheckoutPageBlock,
  CheckoutPageBlockTitle,
  CheckoutPageItems,
  CheckoutPageEmpty,
  CheckoutPageFooter,
  CheckoutPageTotal
} from "./CheckoutPageStyles";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutPageTitle>Checkout</CheckoutPageTitle>
      <CheckoutPageBlock>
        <CheckoutPageBlockTitle>Product</CheckoutPageBlockTitle>
        <CheckoutPageBlockTitle>Description</CheckoutPageBlockTitle>
        <CheckoutPageBlockTitle>Quantity</CheckoutPageBlockTitle>
        <CheckoutPageBlockTitle>Price</CheckoutPageBlockTitle>
        <CheckoutPageBlockTitle>Remove</CheckoutPageBlockTitle>
      </CheckoutPageBlock>
      <CheckoutPageItems>
        {cartItems.length > 0 ? (
          cartItems.map(item => {
            return <CheckoutItem key={item.id} cartItem={item} />;
          })
        ) : (
          <CheckoutPageEmpty>Your cart is empty...</CheckoutPageEmpty>
        )}
      </CheckoutPageItems>
      <CheckoutPageFooter>
        <StripeButton price={total} />
        <CheckoutPageTotal>TOTAL: ${total}</CheckoutPageTotal>
      </CheckoutPageFooter>
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsPriceTotal
});

export default connect(mapStateToProps)(CheckoutPage);
