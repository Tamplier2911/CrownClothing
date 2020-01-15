import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  fetchDataAsync
} from "./action";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// SYNCHRONOUS ACTIONS
describe("fetchUserStart", () => {
  it("expect action to be predictable", () => {
    const expectedAction = {
      type: "FETCH_USER_START"
    };
    expect(fetchUserStart()).toEqual(expectedAction);
  });
});

describe("fetchUserSuccess", () => {
  it("expect action to be predictable ", () => {
    const userObject = { name: "Thomas", age: 29 };
    const expectedAction = {
      type: "FETCH_USER_SUCCESS",
      payload: userObject
    };
    expect(fetchUserSuccess(userObject)).toEqual(expectedAction);
  });
});

describe("fetchUserFailure", () => {
  it("expect action to be predictable", () => {
    const errorMessage = "Something went wrong with request.";
    const expectedAction = {
      type: "FETCH_USER_FAILURE",
      payload: errorMessage
    };
    expect(fetchUserFailure(errorMessage)).toEqual(expectedAction);
  });
});

// ASYNCHRONOUS ACTIONS
// create mock of the store and apply middleware
const mockStore = configureStore([thunk]);

describe("fetchDataAsync", () => {
  it("expect asynchronouse action to retrieve data", () => {
    // get reference to mock store
    const store = mockStore();
    // dispatch asynch function
    store.dispatch(fetchDataAsync());
    // use store get action - action now should contain FETCH DATA ASYNC START
    const actions = store.getActions();
    console.log("ACTIONS", actions);
    // define expected action
    const expectedAction = {
      type: "FETCH_DATA_ASYNC_START"
    };

    // actions - is an array
    expect(actions[0]).toEqual(expectedAction);

    // instead of what we had - dispatch is not a function
    // expect(fetchDataAsync()()).toEqual(expectedAction);
  });
});
