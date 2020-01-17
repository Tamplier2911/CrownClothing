import React from "react";

// Same as React.Component, but with lifecycle method of shouldComponentUpdate
// which is just like in React.memo, checks currently passed in props with previous props
// if props are same - component will not re-render, else it will re-render

class MemoizedClassComponent extends React.PureComponent {
  render() {
    const { person } = this.props;
    console.log("re-rendering class");
    return (
      <div>
        <p>{person.name}</p>
        <p>{person.age}</p>
      </div>
    );
  }
}

export default MemoizedClassComponent;
