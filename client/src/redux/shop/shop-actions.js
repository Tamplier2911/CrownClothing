import { shopActionTypes } from "./shop-types";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap
// } from "../../firebase/firebase.utils";

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} = shopActionTypes;

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

/*

// REDUX THUNK REFERENCES

// No longer using this, was designed for thunk, but using saga now
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
        dispatch(fetchCollectionsSuccess(collectionsMap))
      )
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};

// Another Redux-Thunk syntax reference
export const fetchCollectionsAsync = () => async dispatch => {
  try {
    const collectionRef = firestore.collection("collections");

    dispatch(fetchCollectionsStart());

    const collectionSnap = await collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(collectionSnap);

    dispatch(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    dispatch(fetchCollectionsFailure(error.message));
  }
};

// Using Axios
export const fetchCollectionsAxios = () => async dispatch => {
  try {
    const collection = await axios.get("/api/collection");
    dispatch(fetchCollectionsSuccess(collection));
  } catch (error) {
    dispatch(fetchCollectionsFailure(error.message));
  }
};

*/
