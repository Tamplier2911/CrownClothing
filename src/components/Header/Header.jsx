// import "./Header.scss";
import React from "react";
import Cart from "../Cart/Cart";
import CartDropdown from "../CartDropdown/CartDropdown";

// import { Link } from "react-router-dom";
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
    // <header className="header">
    <HeaderContainer>
      {/* <Link className="header__logowrapper" to="/"> */}
      <LogoContainer to="/">
        <Logo className="header__logo" />
      </LogoContainer>
      {/* </Link> */}

      {/* <nav className="header__nav"> */}
      <Nav>
        {/* <ul className="header__ul"> */}
        <Ul>
          {/* <li className="header__li"> */}
          <Li>
            {/* <Link className="header__link" to="/shop"> */}
            <NavigationLink to="/shop">Shop</NavigationLink>
            {/* </Link> */}
          </Li>
          {/* </li> */}
          {/* <li className="header__li"> */}
          <Li>
            {/* <Link className="header__link" to="/contact"> */}
            <NavigationLink to="/contact">Contact</NavigationLink>
            {/* </Link> */}
          </Li>
          {/* </li> */}
          {/* <li className="header__li"> */}
          <Li>
            {currentUser ? (
              /*<div className="header__link" onClick={() => auth.signOut()}>*/
              <NavigationDiv onClick={() => auth.signOut()}>
                Sign Out
              </NavigationDiv>
            ) : (
              /*</div>*/
              /*<Link className="header__link" to="/sign-in">*/
              <NavigationLink to="/sign-in">Sign In</NavigationLink>
              /* </Link> */
            )}
          </Li>
          {/* </li> */}
        </Ul>
        {/* </ul> */}
      </Nav>
      {/* </nav> */}
      <Cart />
      {cartDropdown ? null : <CartDropdown />}
    </HeaderContainer>
    // </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdown: selectCartHidden
});

export default connect(mapStateToProps)(Header);
