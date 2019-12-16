import React, { createContext, useState, useEffect } from "react";
import {
  addItemToCart,
  decrementQuantity,
  removeItemFromCart,
  getCartItemsCount
} from "./cart-utils";

// Demistifying react-redux behaviour using context API:

// First we create CartContext with initial state.

// Then, creating CartProvider component, which is going to be HOC,
// that going to laverage useState, as well useEffects, to watch for certain state changes.
// As well as provide some additational functionality methods and initialize updated value
// for provider and wrap any provided children component into that provider.

// Important thing to mention - since our entire app is now wrapped into the provider,
// means that if we import context to any of component, we are goign to laverage state of this context,
// by using inner context state and manipulation methods.

// This is literally mimic redux behaviour.

export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  cartItmesCount: 0,
  toggleHidden: () => {},
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  clearItemsFromCart: () => {}
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  const [cartItems, setCartItems] = useState([]);
  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(decrementQuantity(cartItems, item));
  const clearItemFromCart = item =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItemsFromCart = () => setCartItems([]);

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden: hidden,
        cartItems: cartItems,
        cartItemsCount: cartItemsCount,
        toggleHidden: toggleHidden,
        addItem: addItem,
        removeItem: removeItem,
        clearItemFromCart: clearItemFromCart,
        clearItemsFromCart: clearItemsFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
