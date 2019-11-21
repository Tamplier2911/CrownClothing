import React from "react";
import Cart from "../Cart/Cart";
import CartDropdown from "../CartDropdown/CartDropdown";

import { ReactComponent as Logo } from "../../images/svg/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";

// JS rendered styles
import {
  HeaderContainer,
  LogoContainer,
  Nav,
  Ul,
  Li,
  NavigationLink,
  NavigationDiv
} from "./HeaderStyles";

const Header = ({ currentUser, cartDropdown }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="header__logo" />
      </LogoContainer>
      <Nav>
        <Ul>
          <Li>
            <NavigationLink to="/shop">Shop</NavigationLink>
          </Li>
          <Li>
            <NavigationLink to="/contact">Contacts</NavigationLink>
          </Li>
          <Li>
            {currentUser ? (
              <NavigationDiv onClick={() => auth.signOut()}>
                Sign Out
              </NavigationDiv>
            ) : (
              <NavigationLink to="/sign-in">Sign In</NavigationLink>
            )}
          </Li>
        </Ul>
      </Nav>
      <Cart />
      {cartDropdown ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdown: selectCartHidden
});

export default connect(mapStateToProps)(Header);
