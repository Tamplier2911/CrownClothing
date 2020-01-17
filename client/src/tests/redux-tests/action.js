// types
const FETCH_USER_START = "FETCH_USER_START";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const FETCH_DATA_ASYNC_START = "FETCH_DATA_ASYNC_START";
const FETCH_DATA_ASYNC_SUCCESS = "FETCH_DATA_ASYNC_SUCCESS";
const FETCH_DATA_ASYNC_FAILURE = "FETCH_DATA_ASYNC_FAILURE";

export const fetchUserStart = () => ({
  type: FETCH_USER_START
});

export const fetchUserSuccess = userObject => ({
  type: FETCH_USER_SUCCESS,
  payload: userObject
});

export const fetchUserFailure = errorMessage => ({
  type: FETCH_USER_FAILURE,
  payload: errorMessage
});

export const fetchDataAsyncStart = () => ({
  type: FETCH_DATA_ASYNC_START
});

export const fetchDataAsyncSuccess = data => ({
  type: FETCH_DATA_ASYNC_SUCCESS,
  payload: data
});

export const fetchDataAsyncFailure = errorMessage => ({
  type: FETCH_DATA_ASYNC_FAILURE,
  payload: errorMessage
});

export const fetchDataAsync = () => dispatch => {
  dispatch(fetchDataAsyncStart());

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => dispatch(fetchDataAsyncSuccess(json)))
    .catch(error => dispatch(fetchDataAsyncFailure(error.message)));
};
