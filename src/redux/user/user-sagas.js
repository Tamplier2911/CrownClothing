import { takeLatest, put, all, call } from "redux-saga/effects";
import { userActionTypes } from "./user-types";

import {
  googleSignInSuccess,
  googleSignInFailure,
  emailSignInSuccess,
  emailSignInFailure,
  checkUserSessionSuccess,
  checkUserSessionFailure
} from "./user-actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

const {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION
} = userActionTypes;

/*

// could perform kind of refactoring here, but I perfer to stay with descriptive code for now
export function* getSnapshotFromUserAuth(
  userAuth,
  signInSuccess,
  signInFailure
) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

*/

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

    /*

    // part of refactoring for future
    yield getSnapshotFromUserAuth(
      user,
      googleSignInSuccess,
      googleSignInFailure
    );

    */
  } catch (error) {
    // loading error to our state if there any
    yield put(googleSignInFailure(error.message));
  }
}

// signInWithEmail gets payload of email and password which we destructure of
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    // perform signInWIthEmailAndPass, destructure user object from user ref
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    // perform create user profile with user object, returning userRef
    const userRef = yield call(createUserProfileDocument, user);

    // perform .get() on user ref, getting user snapshot
    const userSnapshot = yield userRef.get();

    // saving our user data to the state, spreading userSnapshot data with user id.
    yield put(
      emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );

    /*
    
    // part of refactoring for future
    yield getSnapshotFromUserAuth(user, emailSignInSuccess, emailSignInFailure);

    */
  } catch (error) {
    // loading error to our state if there any
    yield put(emailSignInFailure(error.message));
  }
}

// saga performs checking on current user session
export function* isUserAuthenticated() {
  try {
    // perform onAuthStateChange request, return userAuth
    const userAuth = yield getCurrentUser();

    // if no userAuth return out of this func
    if (!userAuth) return;

    // perform create user profile with user object, returning userRef
    const userRef = yield call(createUserProfileDocument, userAuth);

    // perform .get() on user ref, getting user snapshot
    const userSnapshot = yield userRef.get();

    // saving our user data to the state, spreading userSnapshot data with user id.
    yield put(
      checkUserSessionSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );

    /*   

    // part of refactoring for future
    yield getSnapshotFromUserAuth( userAuth, checkUserSessionSuccess, checkUserSessionFailure);

    */
  } catch (error) {
    yield put(checkUserSessionFailure(error.message));
  }
}

// saga listening for sign in start to happen, then run signInWithGoogle saga
export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// saga listening for sign in with email start, then run signInWithEmail saga
export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

// saga listening for check usser session action creator and fires isUserAuthenticated saga
export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

// bundling sagas, sending to root
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession)
  ]);
}
