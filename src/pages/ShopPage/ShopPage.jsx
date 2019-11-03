import "./ShopPage.scss";
import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shoppage">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
      />
      <Route
        path={`${match.path}/:categoryId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
