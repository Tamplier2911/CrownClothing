import { userReducer } from "./reducer";

// TESTING REDUCERS
describe("userReducer", () => {
  it("testing for defaul case", () => {
    expect(userReducer(undefined, {})).toEqual({
      currentUser: null,
      errorMessage: null
    });
  });
});

describe("userReducer", () => {
  it("testing for successful fetch", () => {
    expect(
      userReducer(undefined, {
        type: "FETCH_USER_SUCCESS",
        payload: { name: "Thomas", age: 29 }
      })
    ).toEqual({
      currentUser: { name: "Thomas", age: 29 },
      errorMessage: null
    });
  });
});

describe("userReducer", () => {
  it("testing for failure fetch", () => {
    expect(
      userReducer(undefined, {
        type: "FETCH_USER_FAILURE",
        payload: "Something went wrong with request."
      })
    ).toEqual({
      currentUser: null,
      errorMessage: "Something went wrong with request."
    });
  });
});
