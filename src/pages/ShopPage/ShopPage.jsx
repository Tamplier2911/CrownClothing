import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

// JS Rendering CSS
import { ShopPageContainer } from "./ShopPageStyles";

const ShopPage = ({ match }) => {
  return (
    <ShopPageContainer>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </ShopPageContainer>
  );
};

export default ShopPage;
