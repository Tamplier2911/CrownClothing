import { userActionTypes } from "./user-types";

const {
  // GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  // EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE
} = userActionTypes;

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    // case GOOGLE_SIGN_IN_START:
    //   return { ...state };
    // case EMAIL_SIGN_IN_START:
    //   return { ...state };
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, errorMessage: null };
    case GOOGLE_SIGN_IN_FAILURE:
    case EMAIL_SIGN_IN_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default userReducer;
