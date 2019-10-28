import "./Header.scss";
import React from "react";
import Cart from "../Cart/Cart";
import CartDropdown from "../CartDropdown/CartDropdown";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/svg/crown.svg";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser, cartDropdown }) => {
  return (
    <div className="header">
      <Link className="header__logowrapper" to="/">
        <Logo className="header__logo" />
      </Link>

      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <Link className="header__link" to="/shop">
              Shop
            </Link>
          </li>
          <li className="header__li">
            <Link className="header__link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="header__li">
            {currentUser ? (
              <div
                className="header__link"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </div>
            ) : (
              <Link className="header__link" to="/sign-in">
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Cart />
      {cartDropdown ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  cartDropdown: { hidden }
}) => ({
  currentUser: currentUser,
  cartDropdown: hidden
});

export default connect(mapStateToProps)(Header);
