import { userActionTypes } from "./user-types";

const {
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE,
  FORM_SIGN_UP_START,
  FORM_SIGN_UP_SUCCESS,
  FORM_SIGN_UP_FAILURE,
  CHECK_USER_SESSION,
  CHECK_USER_SESSION_SUCCESS,
  CHECK_USER_SESSION_FAILURE,
  SIGN_USER_OUT_START,
  SIGN_USER_OUT_SUCCESS,
  SIGN_USER_OUT_FAILURE
} = userActionTypes;

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = errorMessage => ({
  type: GOOGLE_SIGN_IN_FAILURE,
  payload: errorMessage
});

export const emailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const emailSignInSuccess = user => ({
  type: EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = errorMessage => ({
  type: EMAIL_SIGN_IN_FAILURE,
  payload: errorMessage
});

export const formSignUpStart = nameEmailAndPassword => ({
  type: FORM_SIGN_UP_START,
  payload: nameEmailAndPassword
});

export const formSignUpSuccess = user => ({
  type: FORM_SIGN_UP_SUCCESS,
  payload: user
});

export const formSignUpFailure = errorMessage => ({
  type: FORM_SIGN_UP_FAILURE,
  payload: errorMessage
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});

export const checkUserSessionSuccess = user => ({
  // export const checkUserSessionSuccess = ({ user, additionalData }) => ({
  type: CHECK_USER_SESSION_SUCCESS,
  // payload: { user, additionalData }
  payload: user
});

export const checkUserSessionFailure = errorMessage => ({
  type: CHECK_USER_SESSION_FAILURE,
  payload: errorMessage
});

export const signUserOutStart = () => ({
  type: SIGN_USER_OUT_START
});

export const signUserOutSuccess = () => ({
  type: SIGN_USER_OUT_SUCCESS
});

export const signUserOutFailure = errorMessage => ({
  type: SIGN_USER_OUT_FAILURE,
  payload: errorMessage
});
