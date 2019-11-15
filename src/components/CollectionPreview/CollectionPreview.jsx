import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";

// JS Rendering CSS
import {
  CollectionContainer,
  CollectionTitle,
  CollectionView
} from "./CollectionPreviewStyles";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionView>
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </CollectionView>
    </CollectionContainer>
  );
};

export default CollectionPreview;
