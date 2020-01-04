import { cartActionTypes } from "./cart-types";

const {
  ADD_ITEM,
  REMOVE_ITEM,
  DECREMENT_QUANTITY,
  CLEAR_CART,
  UPDATE_CART_IN_FIREBASE, //
  SET_CART_FROM_FIREBASE //
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

export const clearCart = () => ({
  type: CLEAR_CART
});

export const updateCartInFirebase = () => ({
  type: UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = cartItems => ({
  type: SET_CART_FROM_FIREBASE,
  payload: cartItems
});
