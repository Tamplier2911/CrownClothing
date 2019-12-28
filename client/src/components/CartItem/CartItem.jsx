import React from "react";

// JS Rendering Styles
import {
  CartItemContainer,
  CartItemImgWrapper,
  CartItemImg,
  CartItemTextContainer,
  CartItemTitle,
  CartItemPrice
} from "./CartItemStyles";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImgWrapper>
        <CartItemImg alt="test" src={imageUrl}></CartItemImg>
      </CartItemImgWrapper>
      <CartItemTextContainer>
        <CartItemTitle>{name}</CartItemTitle>
        <CartItemPrice>
          {quantity} x ${price}
        </CartItemPrice>
      </CartItemTextContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
