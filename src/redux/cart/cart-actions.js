import { cartActionTypes } from "./cart-types";

const {
  ADD_ITEM,
  REMOVE_ITEM,
  DECREMENT_QUANTITY
} = cartActionTypes;

export const toggleCartDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const decrementQuantity = item => ({
  type: DECREMENT_QUANTITY,
  payload: item
});
