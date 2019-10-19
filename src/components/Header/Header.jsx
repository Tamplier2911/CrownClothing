import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/svg/crown.svg";

const Header = () => {
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
            <Link className="header__link" to="/sign-in">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header__cart">Shopping Cart</div>
    </div>
  );
};

export default Header;
