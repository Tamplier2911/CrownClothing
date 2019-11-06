import "./CheckoutPage.scss";
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

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkoutPage">
      <h1 className="checkoutPage__title">Checkout</h1>
      <div className="checkoutPage__header">
        <span className="checkoutPage__header--title">
          Product
        </span>
        <span className="checkoutPage__header--title">
          Description
        </span>
        <span className="checkoutPage__header--title">
          Quantity
        </span>
        <span className="checkoutPage__header--title">
          Price
        </span>
        <span className="checkoutPage__header--title">
          Remove
        </span>
      </div>
      <div className="checkoutPage__items">
        {cartItems.length > 0 ? (
          cartItems.map(item => {
            return (
              <CheckoutItem key={item.id} cartItem={item} />
            );
          })
        ) : (
          <div className="checkoutPage__empty">
            Your cart is empty...
          </div>
        )}
      </div>
      <div className="checkoutPage__footer">
        <StripeButton price={total} />
        <div className="checkoutPage__total">
          TOTAL: ${total}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsPriceTotal
});

export default connect(mapStateToProps)(CheckoutPage);
