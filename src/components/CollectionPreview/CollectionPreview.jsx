import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import { withRouter } from "react-router-dom";

// JS Rendering CSS
import {
  CollectionContainer,
  CollectionTitle,
  CollectionTitleLink,
  CollectionView
} from "./CollectionPreviewStyles";

const CollectionPreview = ({ title, items, match: { path } }) => {
  return (
    <CollectionContainer>
      <CollectionTitle>
        <CollectionTitleLink to={`${path}/${title.toLowerCase()}`}>
          {title}
        </CollectionTitleLink>
      </CollectionTitle>
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

export default withRouter(CollectionPreview);
