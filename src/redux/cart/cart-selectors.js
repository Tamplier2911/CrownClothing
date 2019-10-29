import { createSelector } from "reselect";

// input selector
const selectCart = state => state.cartDropdown;

// const selectHidden = state => state.cartDropdown;

// output selectors
export const selectCartItems = createSelector(
  [selectCart],
  cartDropdown => cartDropdown.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItem =>
    cartItem.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  cartDropdown => cartDropdown.hidden
);
