import "./MenuItem.scss";
import React from "react";

const MenuItem = props => {
  const { itemStyle, title, img } = props;
  console.log(img);
  return (
    <figure
      className={`item ${itemStyle}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="item__figure">
        <h1 className="item__figure--title">{title}</h1>
        <span className="item__figure--shop">Shop Now</span>
      </div>
    </figure>
  );
};

export default MenuItem;
