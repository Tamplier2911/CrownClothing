import { takeLatest, call, put } from "redux-saga/effects";
import { shopActionTypes } from "./shop-types";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop-actions";

const {
  FETCH_COLLECTIONS_START
  // FETCH_COLLECTIONS_SUCCESS,
  // FETCH_COLLECTIONS_FAILURE
} = shopActionTypes;

// yielding - yielding control over the saga back to the middleware

export function* fetchCollectionsAsync() {
  // yield console.log("fetchCollectionAsync: I am fired!");

  try {
    // send request to firestore collection - get collection reference back
    const collectionRef = firestore.collection("collections");

    // use .get() method on coll ref - get coll snapshot back (yielding)
    const snapshot = yield collectionRef.get();

    // use perform data transformation within call effect (yielding)
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    // use put effect to create successful action (yielding)
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    // use put ffect to catch error in case ther is one
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
