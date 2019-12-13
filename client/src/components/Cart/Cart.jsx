import React from "react";

import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart-actions";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

// JS Rendered Styles
import { CartContainer, CartCount, CartSVG } from "./CartStyles";

const Cart = ({ toggleCartDropdown, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartDropdown}>
      <CartSVG />
      <CartCount>{itemCount}</CartCount>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, { toggleCartDropdown })(Cart);
