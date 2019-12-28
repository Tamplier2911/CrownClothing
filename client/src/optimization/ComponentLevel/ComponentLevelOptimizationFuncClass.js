import React from "react";

// Simple parent component with local state of person and count:

// any time we click first button - we send newly generated person object to child component
// any time we click second button - we send old persone object to child component

// no matter which state we send now - child component will re-render any time set-state called
class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      person: { name: "Billie", age: 21 }
    };
  }

  sendNewState = () => {
    const { count } = this.state;
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ].sort(() => 0.5 - Math.random());

    let name = [];
    let age = Math.floor(Math.random() * 40);

    for (let i = 0; i < 7; i++) {
      name.push(letters[i]);
    }

    name = name.join("")[0].toUpperCase() + name.join("").slice(1);

    this.setState({
      person: {
        name,
        age
      },
      count: count + 1
    });
  };

  sendOldState = () => {
    this.setState({
      persone: { name: this.state.name, age: this.state.age },
      count: this.state.count + 1
    });
  };

  render() {
    const { person, count } = this.state;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" onClick={() => this.sendOldState()}>
          Send Old State
        </button>
        <Person person={person} />
        <Persone person={person} />
        <button type="button" onClick={() => this.sendNewState()}>
          Send New State
        </button>
        <div>Count: {count}</div>
      </div>
    );
  }
}

// FUNCTION MEMOIZATION

// Using React.memo HOC right on component definition:
// this will prevent functional component from re-rendering every time
// it called with previous satate (which will be memoized)
const Person = React.memo(({ person }) => {
  console.log("re-rendering function");
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </div>
  );
});

// Can aswell wrap exporting component
// export default React.memo(Person);

// The caveat at React.memo() is that initial rendering of mmoized
// component takes longer than rendering of normal component.
// Therefore we can save a lot of re-rendering time for components
// which are expected to get non-changing state a lot.e

// CLASS MEMOIZATION

// Same as React.Component, but with lifecycle method of shouldComponentUpdate
// which is just like in React.memo, checks currently passed in props with previous props
// if props are same - component will not re-render, else it will re-render
class Persone extends React.PureComponent {
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

export default Parent;
