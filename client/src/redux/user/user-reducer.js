import { userActionTypes } from "./user-types";

const {
  // GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  // EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE,
  // FORM_SIGN_UP_START,
  // FORM_SIGN_UP_SUCCESS,
  FORM_SIGN_UP_FAILURE,
  // CHECK_USER_SESSION,
  CHECK_USER_SESSION_SUCCESS,
  CHECK_USER_SESSION_FAILURE,
  // SIGN_USER_OUT_START,
  SIGN_USER_OUT_SUCCESS,
  SIGN_USER_OUT_FAILURE
} = userActionTypes;

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // using this actions only to listen for saga
    // case GOOGLE_SIGN_IN_START:
    //   return { ...state };
    // case EMAIL_SIGN_IN_START:
    //   return { ...state };
    // case CHECK_USER_SESSION:
    //   return { ...state };
    // case FORM_SIGN_UP_SUCCESS:
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
    case CHECK_USER_SESSION_SUCCESS:
      return { ...state, currentUser: action.payload, errorMessage: null };
    case SIGN_USER_OUT_SUCCESS:
      return { ...state, currentUser: null, errorMessage: null };
    case GOOGLE_SIGN_IN_FAILURE:
    case EMAIL_SIGN_IN_FAILURE:
    case FORM_SIGN_UP_FAILURE:
    case CHECK_USER_SESSION_FAILURE:
    case SIGN_USER_OUT_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default userReducer;
