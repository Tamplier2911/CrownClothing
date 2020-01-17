// types
const FETCH_USER_START = "FETCH_USER_START";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// state
const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
};

// reducer
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return { ...state };
    case FETCH_USER_SUCCESS:
      return { ...state, currentUser: action.payload, errorMessage: null };
    case FETCH_USER_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
