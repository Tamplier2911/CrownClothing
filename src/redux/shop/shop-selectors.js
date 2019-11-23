import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   women: 4,
//   men: 5
// };

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// export const selectCollectionsForPreview = createSelector(
//   [selectShopCollections],
//   collections => (collections ? Object.values(collections) : [])
// );

export const selectShopCollectionsAsArray = createSelector(
  [selectShopCollections],
  collection => (collection ? Object.values(collection) : [])
);

// data normalization storing as hashmap
export const selectShopCollection = collectionUrlParam =>
  createSelector([selectShopCollections], collection =>
    collection ? collection[collectionUrlParam] : null
  );

// selector for isFetching
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

// storing as an array
/*
export const selectShopCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collection =>
      collection.find(
        collection =>
          collection.id ===
          COLLECTION_ID_MAP[collectionUrlParam]
      )
  );
*/
