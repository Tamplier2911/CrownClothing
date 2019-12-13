import { takeLatest, put, all, call } from "redux-saga/effects";
import { userActionTypes } from "./user-types";

import {
  googleSignInSuccess,
  googleSignInFailure,
  emailSignInSuccess,
  emailSignInFailure,
  formSignUpSuccess,
  formSignUpFailure,
  checkUserSessionSuccess,
  checkUserSessionFailure,
  signUserOutSuccess,
  signUserOutFailure
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
  CHECK_USER_SESSION,
  SIGN_USER_OUT_START,
  FORM_SIGN_UP_START,
  FORM_SIGN_UP_SUCCESS
} = userActionTypes;

/*

// could perform kind of refactoring here, but I perfer to stay with descriptive code for now
export function* getSnapshotFromUserAuth(
  userAuth,
  signInSuccess,
  signInFailure,
  additionalData
) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
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

export function* signUpWithForm({ payload: { displayName, email, password } }) {
  try {
    // perform createUserWithEmailAndPassword, destructure user object from user ref
    // user object contains = { displayName: null, email: "test@test.com", uid: "1kuBOkGxF0ZQQ"}
    // nothing being created at this stage
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    // saving our user data as well as additionalData of displayName
    yield put(formSignUpSuccess({ user, additionalData: { displayName } }));

    // now we need to listen for signup success in order to create new user and log user in.
  } catch (error) {
    // loading error to our state if there any
    yield put(formSignUpFailure(error.message));
  }
}

// this payload we get from what we passed from formSignedUpSuccess - user and additionalData
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  try {
    // perform create user profile with user object, returning userRef
    const userRef = yield call(createUserProfileDocument, user, additionalData);

    // perform .get() on user ref, getting user snapshot
    const userSnapshot = yield userRef.get();
    // saving our user data to the state using emailSignInSuccessAction, spreading userSnapshot data with user id.
    yield put(
      emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );

    /*
    
    // part of refactoring for future
    yield getSnapshotFromUserAuth(user, emailSignInSuccess, emailSignInFailure, additionalData);

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

// saga signs user out once signUserOutStart action is fired.
function* signUserOut() {
  try {
    // perform signOut() on auth.
    yield auth.signOut();

    // trigger signUserOutSuccess action creator, set currentUser to null
    yield put(signUserOutSuccess());
  } catch (error) {
    // trigger signUserOutFailure action creator, send error message to state
    yield put(signUserOutFailure(error.message));
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

export function* onFormSignUp() {
  yield takeLatest(FORM_SIGN_UP_START, signUpWithForm);
}

export function* onFormSignUpSuccess() {
  yield takeLatest(FORM_SIGN_UP_SUCCESS, signInAfterSignUp);
}

// saga listening for check usser session action creator and fires isUserAuthenticated saga
export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUserOUtStart() {
  yield takeLatest(SIGN_USER_OUT_START, signUserOut);
}

// bundling sagas, sending to root
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onFormSignUp),
    call(onFormSignUpSuccess),
    call(onCheckUserSession),
    call(onSignUserOUtStart)
  ]);
}
