import "./CollectionPreview.scss";
import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection">
      <h1 className="collection__title">{title}</h1>
      <div className="collection__preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return (
              <CollectionItem key={item.id} item={item} />
            );
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
