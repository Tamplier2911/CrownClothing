import { cartActionTypes } from "./cart-types";
import { addItemToCart, decrementQuantity } from "./cart-utils";

const {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREMENT_QUANTITY,
  CLEAR_CART,
  SET_CART_FROM_FIREBASE
} = cartActionTypes;

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: decrementQuantity(state.cartItems, action.payload)
      };
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    case SET_CART_FROM_FIREBASE:
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
