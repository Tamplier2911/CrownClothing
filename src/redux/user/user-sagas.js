import { takeLatest, put, all, call } from "redux-saga/effects";
import { userActionTypes } from "./user-types";

import { googleSignInSuccess, googleSignInFailure } from "./user-actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";

const {
  GOOGLE_SIGN_IN_START
  //   GOOGLE_SIGN_IN_SUCCESS,
  //   GOOGLE_SIGN_IN_FAILURE,
  //   EMAIL_SIGN_IN_START,
  //   EMAIL_SIGN_IN_SUCCESS,
  //   EMAIL_SIGN_IN_FAILURE
} = userActionTypes;

export function* signInWithGoogle() {
  try {
    // perform signInWIthPopup, destructure user object from user ref
    const { user } = yield auth.signInWithPopup(googleProvider);

    // perform create user profile with user object, returning userRef
    const userRef = yield call(createUserProfileDocument, user);

    // perform .get() on user ref, getting user snapshot
    const userSnapshot = yield userRef.get();

    // saving our user data to the state, spreading userSnapshot data with user id.
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    // loading error to our state if there any
    yield put(googleSignInFailure(error.message));
  }
}

// saga listening for sign in start to happen, then run signInWithGoogle saga
export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// bundling sagas, sending to root
export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
