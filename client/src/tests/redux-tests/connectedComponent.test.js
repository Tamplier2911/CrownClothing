import { shallow } from "enzyme";
import React from "react";
import ConnectedComponent from "./connectedComponent";

// using manual store mocking or
// https://github.com/dmitry-zaets/redux-mock-store

// all enzme methods
// https://airbnb.io/enzyme/docs/api/shallow.html

// beforeEach(() =>{})

// wrapper.instance() - gives access to all methods
// expect(wrapper.instance().methodName([])).toEqual([])

// TESTING CONNECTED COMPONENTS
describe("<ConnectedComponent />", () => {
  it("expect to render connected component", () => {
    const mockStore = {
      getState() {
        return {
          user: {},
          cartDropdown: [],
          directory: [],
          shop: {}
        };
      }
    };
    const wrapper = shallow(<ConnectedComponent store={mockStore} />);
    expect(wrapper).toMatchSnapshot();
  });
});
