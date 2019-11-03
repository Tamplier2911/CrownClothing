import "./CollectionPage.scss";
import React from "react";

// import CollectionItem from "../../components/CollectionItem/CollectionItem";

const CollectionPage = ({ match }) => {
  console.log(match.params.categoryId);
  return (
    <div className="collectionPage">
      <h1 className="collectionPage__title">
        {match.params.categoryId}
      </h1>
    </div>
  );
};

export default CollectionPage;
