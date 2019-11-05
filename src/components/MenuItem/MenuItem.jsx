import "./MenuItem.scss";
import React from "react";
import { withRouter } from "react-router-dom";

const onItemClick = props => {
  const { history, match, linkUrl } = props;
  history.push(`${match.url}${linkUrl}`);
  // console.log(props);
};

const MenuItem = props => {
  const { itemStyle, title, imageUrl } = props;
  return (
    <figure
      className={`item ${itemStyle}`}
      onClick={() => onItemClick(props)}
    >
      <div
        className="item__bg"
        style={{ backgroundImage: `url(${imageUrl})` }}
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

export default withRouter(MenuItem);
