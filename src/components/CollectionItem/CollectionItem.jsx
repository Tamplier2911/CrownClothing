import "./CollectionItem.scss";
import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

const CollectionItem = ({ item, addItem }) => {
  const { id, imageUrl, name, price } = item;
  return (
    <figure
      className={`collectionItem collectionItem-${id}`}
    >
      <div className="collectionItem__wrapper">
        <img
          className="collectionItem__image"
          src={imageUrl}
          alt="product presentation"
        />
        <button
          className="collectionItem__link"
          href="/"
          onClick={() => addItem(item)}
        >
          Add to Cart
        </button>
      </div>

      <div className="collectionItem__bottom">
        <div className="collectionItem__name">{name}</div>
        <div className="collectionItem__price">
          ${price}
        </div>
      </div>
    </figure>
  );
};

export default connect(
  null,
  { addItem }
)(CollectionItem);
