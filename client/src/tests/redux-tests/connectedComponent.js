import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";

const ConnectedComponent = ({ cartItems }) => {
  return (
    <div style={{ display: "grid", justifyItems: "center" }}>
      {cartItems.map(item => {
        return (
          <div
            key={item.id}
            style={{ display: "grid", justifyItems: "center" }}
          >
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(ConnectedComponent);
