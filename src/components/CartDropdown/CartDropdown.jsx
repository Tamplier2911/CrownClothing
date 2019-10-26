import "./CartDropdown.scss";
import React from "react";

import CustomButton from "../CustomButton/CustomButton";

const CartDropdown = () => {
  return (
    <div className="cartDropdown">
      <div className="cartDropdown__items">
        <div className="cartDropdown__item">
          <div className="cartDropdown__item--imgWrapper">
            <img
              className="cartDropdown__item--img"
              alt="test"
              src="https://bit.ly/2okzOX3"
            ></img>
          </div>
          <div className="cartDropdown__item--textWrapper">
            <span className="cartDropdown__item--title">
              Brown Cowboy
            </span>
            <span className="cartDropdown__item--price">
              1 x $35
            </span>
          </div>
        </div>

        <div className="cartDropdown__item">
          <div className="cartDropdown__item--imgWrapper">
            <img
              className="cartDropdown__item--img"
              alt="test"
              src="https://bit.ly/2okzOX3"
            ></img>
          </div>
          <div className="cartDropdown__item--textWrapper">
            <span className="cartDropdown__item--title">
              Brown Cowboy
            </span>
            <span className="cartDropdown__item--price">
              1 x $35
            </span>
          </div>
        </div>

        <div className="cartDropdown__item">
          <div className="cartDropdown__item--imgWrapper">
            <img
              className="cartDropdown__item--img"
              alt="test"
              src="https://bit.ly/2okzOX3"
            ></img>
          </div>
          <div className="cartDropdown__item--textWrapper">
            <span className="cartDropdown__item--title">
              Brown Cowboy
            </span>
            <span className="cartDropdown__item--price">
              1 x $35
            </span>
          </div>
        </div>

        <div className="cartDropdown__item">
          <div className="cartDropdown__item--imgWrapper">
            <img
              className="cartDropdown__item--img"
              alt="test"
              src="https://bit.ly/2okzOX3"
            ></img>
          </div>
          <div className="cartDropdown__item--textWrapper">
            <span className="cartDropdown__item--title">
              Brown Cowboy
            </span>
            <span className="cartDropdown__item--price">
              1 x $35
            </span>
          </div>
        </div>

        <div className="cartDropdown__item">
          <div className="cartDropdown__item--imgWrapper">
            <img
              className="cartDropdown__item--img"
              alt="test"
              src="https://bit.ly/2okzOX3"
            ></img>
          </div>
          <div className="cartDropdown__item--textWrapper">
            <span className="cartDropdown__item--title">
              Brown Cowboy
            </span>
            <span className="cartDropdown__item--price">
              1 x $35
            </span>
          </div>
        </div>

        <div className="cartDropdown__item">
          <div className="cartDropdown__item--imgWrapper">
            <img
              className="cartDropdown__item--img"
              alt="test"
              src="https://bit.ly/2okzOX3"
            ></img>
          </div>
          <div className="cartDropdown__item--textWrapper">
            <span className="cartDropdown__item--title">
              Brown Cowboy
            </span>
            <span className="cartDropdown__item--price">
              1 x $35
            </span>
          </div>
        </div>

        <div className="cartDropdown__item">
          <div className="cartDropdown__item--imgWrapper">
            <img
              className="cartDropdown__item--img"
              alt="test"
              src="https://bit.ly/2okzOX3"
            ></img>
          </div>
          <div className="cartDropdown__item--textWrapper">
            <span className="cartDropdown__item--title">
              Brown Cowboy
            </span>
            <span className="cartDropdown__item--price">
              1 x $35
            </span>
          </div>
        </div>
      </div>
      <div className="cartDropdown__btnWrapper">
        <CustomButton
          styles="cartDropdown__button"
          type="button"
        >
          Go To Checkout
        </CustomButton>
      </div>
    </div>
  );
};

export default CartDropdown;
