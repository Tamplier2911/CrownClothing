import React, { useContext, useState } from "react";
import CartContext from "./cart-context";
// import CartContext from "./cart-context";

const HeaderExampleComponent = () => {
  //   const { hidden, toggleHidden } = useContext(CartContext);
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);
  return (
    <div>
      <CartContext.Provider
        value={{
          hidden: hidden,
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
