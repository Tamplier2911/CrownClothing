import { createSelector } from "reselect";

// input selector
const selectCart = state => state.cartDropdown;

// const selectHidden = state => state.cartDropdown;

// cart items array of objects
export const selectCartItems = createSelector(
  [selectCart],
  cartDropdown => cartDropdown.cartItems
);

// item quantity
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

// price total
export const selectCartItemsPriceTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);

// dropdown hidden true/false
export const selectCartHidden = createSelector(
  [selectCart],
  cartDropdown => cartDropdown.hidden
);
