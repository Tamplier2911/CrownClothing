import { shopActionTypes } from "./shop-types";

const { UPDATE_COLLECTIONS } = shopActionTypes;

export const updateCollection = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});
