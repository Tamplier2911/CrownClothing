import { shopActionTypes } from "./shop-types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} = shopActionTypes;

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");

    // turns isFetchign: true
    dispatch(fetchCollectionsStart());

    // beginning of asynchronous request (Promise Pattern)
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        return collectionsMap;
      })
      .then(collectionsMap =>
        // sending payload with fetched collections to reducer
        dispatch(fetchCollectionSuccess(collectionsMap))
      )
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
