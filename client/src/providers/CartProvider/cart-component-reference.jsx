import React, { useContext } from "react";

import CartProvider from "./cart-provider";
import { CartContext } from "./cart-provider";

// Example component to demonstrate usage of complext context API setup

// Test component laveraging useContext in order to get access to CartContext.
// We destructuring values and assigning methods to some onClick events.

// Once onClick event triggered, useState in provider component triggered as well,
// which causing parent component of provider to re-render, as well as pass updated values to provider,
// as well as pass updated values to wrapped children.

export const ExamplePage = () => {
  return (
    <div>
      <CartProvider>
        <App />
      </CartProvider>
    </div>
  );
};

const App = () => {
  const {
    hidden,
    toggleHidden,
    cartItems,
    addItem,
    removeItem,
    cartItemsCount,
    clearItemsFromCart
  } = useContext(CartContext);

  const valueUp = cartItems.length + 1;
  const valueDown = cartItems.length;

  return (
    <div>
      <div>{cartItemsCount}</div>
      <div>{String(hidden)}</div>
      <div>
        {cartItems.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <button onClick={toggleHidden}>Toggle Dropdown</button>
      <button onClick={() => addItem({ id: valueUp, name: `Item-${valueUp}` })}>
        Add Item To Cart
      </button>
      <button
        onClick={
          cartItems.length
            ? () => removeItem({ id: valueDown, name: `Item-${valueDown}` })
            : null
        }
      >
        Remove Item From Cart
      </button>
      <button onClick={clearItemsFromCart}>Clear Cart</button>
    </div>
  );
};

export default ContactsPage;
