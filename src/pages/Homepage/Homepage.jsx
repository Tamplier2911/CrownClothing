import "./Homepage.scss";
import React from "react";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__menu">
        <figure className="item item--1">
          <div className="item__figure">
            <h1 className="item__figure--title">Hats</h1>
            <span className="item__figure--shop">
              Shop Now
            </span>
          </div>
        </figure>

        <figure className="item item--2">
          <div className="item__figure">
            <h1 className="item__figure--title">Jackets</h1>
            <span className="item__figure--shop">
              Shop Now
            </span>
          </div>
        </figure>

        <figure className="item item--3">
          <div className="item__figure">
            <h1 className="item__figure--title">
              Sneakers
            </h1>
            <span className="item__figure--shop">
              Shop Now
            </span>
          </div>
        </figure>

        <figure className="item item--4">
          <div className="item__figure">
            <h1 className="item__figure--title">Womens</h1>
            <span className="item__figure--shop">
              Shop Now
            </span>
          </div>
        </figure>

        <figure className="item item--5">
          <div className="item__figure">
            <h1 className="item__figure--title">Mens</h1>
            <span className="item__figure--shop">
              Shop Now
            </span>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Homepage;
