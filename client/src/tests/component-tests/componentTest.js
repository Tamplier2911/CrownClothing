import React, { useState } from "react";

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    const { name, email, children } = this.props;
    return (
      <div
        style={{ display: "grid", justifyContent: "center", padding: "2rem" }}
      >
        <div
          style={{
            display: "grid",
            padding: "2rem",
            border: ".1rem solid #333",
            borderRadius: ".5rem",
            boxShadow: "0 2rem 4rem #00000030"
          }}
        >
          <div>{name}</div>
          <div>{email}</div>
          <div>{children}</div>
          <div>{this.state.counter}</div>
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
            id="counter"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

/*
const TestComponent = ({ name, email, children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ display: "grid", justifyContent: "center", padding: "2rem" }}>
      <div
        style={{
          display: "grid",
          padding: "2rem",
          border: ".1rem solid #333",
          borderRadius: ".5rem",
          boxShadow: "0 2rem 4rem #00000030"
        }}
      >
        <div>{name}</div>
        <div>{email}</div>
        <div>{children}</div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)} id="counter">
          +
        </button>
      </div>
    </div>
  );
};
*/
export default TestComponent;
