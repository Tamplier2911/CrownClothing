export const addItemToCart = (cartItems, cartItemToAdd) => {
  const cartItemExists = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (cartItemExists) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decrementQuantity = (cartItems, cartItemToDecrement) => {
  const decrementItem = cartItems.find(
    cartItem => cartItem.id === cartItemToDecrement.id
  );

  if (decrementItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== decrementItem.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === decrementItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => cartItem.index !== cartItemToRemove.id);
};

export const getCartItemsCount = cartItems => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
};
