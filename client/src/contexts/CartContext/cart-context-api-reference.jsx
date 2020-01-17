import React, { useContext, useState } from "react";
import CartContext from "./cart-context";

// Here we have Header component that has both CartIcon & CartDropdown coponents.
// On CartIcon click we want either show or hide CartDropdown.

// In order to implement dynamical toggling, we going to use useState hook,
// which going to be key aspect in re-rendering parent component.

// We desctructure initial value of hidden and setHidden,
// setHidden is going to be a function that will toggle value of hidden to opposite.

// Now the key part - we pass values of hidden and setHidden as initial values of
// Context.Provider, therefore inside of CartIcon we consuming Context using useContext
// and performing toggling CartDropdown as onClick function.

// This way every time we click on CartIcon, we enforce setState(), which cause component to:
// 1) change value of hidden to opposite.
// 2) re-render header (parent component).
// 3) add new values of hidden and toggleHidden to cart context dynamically.
// 4) either render or hide cart CartDropdown menu.

const HeaderExampleComponent = () => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);
  return (
    <div>
      <CartContext.Provider
        value={{
          hidden: hidden,
          cartItems: [],
          toggleHidden: toggleHidden
        }}
      >
        <CartIcon />
      </CartContext.Provider>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const CartIcon = () => {
  const { toggleHidden } = useContext(CartContext);
  return (
    <div>
      <div onClick={toggleHidden}></div>
    </div>
  );
};
const CartDropdown = () => {};

export default HeaderExampleComponent;
