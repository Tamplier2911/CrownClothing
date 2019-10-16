import "./ShopPage.scss";
import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shoppage">
        <h1 className="shoppage__title">Collections</h1>
        {collections.map(({ id, ...collectionProps }) => {
          return (
            <CollectionPreview
              key={id}
              {...collectionProps}
            />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
