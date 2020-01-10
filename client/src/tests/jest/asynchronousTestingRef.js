// state
const state = {
  users: null,
  posts: null
};

// state initialization function
const setState = (name, data) => {
  state[name] = data;
};

// asynchronous function in order to fetch data and set state
const getData = async (
  url = "https://jsonplaceholder.typicode.com",
  dataType = "users",
  page = ""
) => {
  try {
    const res = await fetch(`${url}/${dataType}/${page}`);
    const data = await res.json();
    // replace that after test --
    return { count: data.length, results: data };
    // setState(dataType, { count: data.length, results: data });
  } catch (error) {
    return error.message;
  }
};

// asynchronous function with dependency
const getDataDp = fetch => async (
  url = "https://jsonplaceholder.typicode.com",
  dataType = "users",
  page = ""
) => {
  try {
    const res = await fetch(`${url}/${dataType}/${page}`);
    const data = await res.json();
    return { count: data.length, results: data };
  } catch (error) {
    return error.message;
  }
};

// fetch users and fetch posts
// getData();
// getData("https://jsonplaceholder.typicode.com", "posts");

// fetch users and fetch posts with dependency
// getDataDp(fetch)();
// getDataDp(fetch)("https://jsonplaceholder.typicode.com", "posts");

// log state in order to see its there
// setTimeout(() => console.log(state.users), 3000);
// setTimeout(() => console.log(state.posts), 8000);

// Using return on promise calling function assertions(2)
describe("getData", () => {
  test("calls jsonplaceholder to test fetched users amount", () => {
    expect.assertions(1);
    return getData().then(data => {
      expect(data.count).toEqual(10);
    });
  });
});

// Using done instead return
describe("getData", () => {
  test("calls jsonplaceholder to test name of first fetched user", done => {
    expect.assertions(1);
    getData().then(data => {
      expect(data.results[0].name).toEqual("Leanne Graham");
      done(); // *done
    });
  });
});

// Example with two assertions
describe("getData", () => {
  test("calls jsonplaceholder to test fetched users amount to be greater than 5", () => {
    expect.assertions(2);
    return getData()
      .then(data => {
        expect(data.count).toEqual(10);
        return data.count;
      })
      .then(count => expect(count).toBeGreaterThan(5));
  });
});

// expect.assertions(n) - verifies that a certain number of assertions are called during a test.
// in simple words as many callbacks we have that many assertions we expect.

// test with assertions might require done to be called once test finished.

// MOCKS

// https://jestjs.io/docs/en/mock-function-api

describe("getDataDp", () => {
  test("getDataDp returns count and results using fetchMock", () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 10,
            results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          })
      })
    );
    // mockFetch should mimic following fetch request:
    // mockFetch().then(res => res.json()).then(data => console.log(data));
    expect.assertions(4);
    return getDataDp(mockFetch)().then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith(
        "https://jsonplaceholder.typicode.com/users/"
      );
      expect(data.results.count).toEqual(10);
      expect(data.results.results).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
