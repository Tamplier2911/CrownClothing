import "./CollectionItem.scss";
import React from "react";

const CollectionItem = ({ id, imageUrl, name, price }) => {
  console.log(id);
  return (
    <figure className={`collectionItem check-${id}`}>
      <div className="collectionItem__wrapper">
        <img
          className="collectionItem__image"
          src={imageUrl}
          alt="product presentation"
        />
        <a className="collectionItem__link" href="/">
          Add to Cart
        </a>
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

export default CollectionItem;
