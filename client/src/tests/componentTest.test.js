import TestComponent from "./componentTest";
import React from "react";
import { shallow, mount, render } from "enzyme";

// SHALLOW
describe("<TestComponent /> - shallow", () => {
  it("renders TestComponent", () => {
    expect(shallow(<TestComponent />).length).toEqual(1);
  });

  it("renders children when passed in", () => {
    const wrapper = shallow(
      <TestComponent>
        <div className="test" />
      </TestComponent>
    );
    expect(wrapper.contains(<div className="test" />)).toEqual(true);
  });
});

// MOUNT
describe("<TestComponent /> - mount", () => {
  it("test if props setting allowed", () => {
    const wrapper = mount(<TestComponent testPropName="testPropValue" />);
    expect(wrapper.props().testPropName).toEqual("testPropValue");

    wrapper.setProps({ testPropName2: "testPropValue2" });
    expect(wrapper.props().testPropName2).toEqual("testPropValue2");
  });
});

// RENDER
describe("render a div - render", () => {
  it("test if div properly rendered", () => {
    const wrapper = render(<TestComponent />);
    expect(wrapper.hasClass()).toEqual(false);
  });
});

// https://github.com/airbnb/enzyme

// shallow - render component it self at a time, not the childs of that component.
// shallow - Shallow rendering is useful to constrain yourself to testing a
// component as a unit, and to ensure that your tests aren't indirectly
// asserting on behavior of child components.
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md

// mount - renders dom fully.
// mount - full DOM rendering is ideal for use cases where you have components
// that may interact with DOM APIs or need to test components that are
// wrapped in higher order components.
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md

// render - returns component in html.
// render - function to generate HTML from your React tree, and analyze
// the resulting HTML structure, returns a wrapper very similar to the other
// renderers in enzyme, mount and shallow; however, render uses a third party HTML
// parsing and traversal library Cheerio. We believe that Cheerio handles parsing and
// traversing HTML extremely well, and duplicating this functionality ourselves would be a
// disservice.
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
