import { createContext } from "react";

const CartContext = createContext({
  hidden: true,
  cartItems: [],
  toggleHiden: () => {}
});

export default CartContext;
