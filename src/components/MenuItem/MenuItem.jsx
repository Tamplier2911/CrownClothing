import "./MenuItem.scss";
import React from "react";

const MenuItem = props => {
  const { itemStyle, title, img } = props;
  console.log(img);
  return (
    <figure className={`item ${itemStyle}`}>
      <div
        className="item__bg"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="item__textbox">
        <h1 className="item__textbox--title">{title}</h1>
        <span className="item__textbox--shop">
          Shop Now
        </span>
      </div>
    </figure>
  );
};

export default MenuItem;
