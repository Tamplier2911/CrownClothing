import React from "react";

import MemoizedFunctionalComponent from "./reactMemo";
import MemoizedClassComponent from "./reactPureComponent";
import MemoizeCallback from "./useCallback";
import MemoizedValue from "./useMemo";

// Simple parent component with local state of person and count:

// any time we click first button - we send newly generated person object to child component
// any time we click second button - we send old persone object to child component

// no matter which state we send now - child component will re-render any time set-state called
class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      person: { name: "Billie", age: 21 },
      count1: 0,
      count2: 0,
      input: ""
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

  incrementCount1 = () => this.setState({ count1: this.state.count1 + 1 });
  incrementCount2 = () => this.setState({ count2: this.state.count2 + 1 });

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  }

  render() {
    const { person, count, count1, count2, input } = this.state;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" onClick={() => this.sendOldState()}>
          Send Old State
        </button>
        <MemoizedFunctionalComponent person={person} />
        {/* <MemoizedFunctionalComponent person={{ name: "Jack", age: 21 }} />  <--- will keep rerendering */}
        <MemoizedClassComponent person={person} />
        {/* <MemoizedClassComponent person={{ name: "Jack", age: 21 }} /> <--- will keep rerendering*/}
        <button type="button" onClick={() => this.sendNewState()}>
          Send New State
        </button>
        <div>Count: {count}</div>

        <MemoizeCallback
          counter1={this.incrementCount1}
          counter2={this.incrementCount2}
          count1={count1}
          count2={count2}
        />
        <input
          type="text"
          name="input"
          onChange={e => this.onInputChange(e)}
          value={input}
        ></input>
        <MemoizedValue value={input} />
      </div>
    );
  }
}

// Remember that if our object declaration will be static
// JS will create new object every time parent component re-renders
// so child component will be re-render no matter what, even React.memo & React.PureComponent
// same ofcourse for arrays

/*

///////////////////////////////// FUNCTION COMPONENT MEMOIZATION ////////////////////////////////////////

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

///////////////////////////////// CLASS COMPONENT MEMOIZATION //////////////////////////////////////////

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

///////////////////////////////// CALLBACK FUNCTION MEMOIZATION ////////////////////////////////////////

// Every inline | dynamic object in JS passed in as a prop will cause child component re-render
// since functions are also objects in JS, this counts for functions we pass in as props as well

// In order to avoid child-component re-render, we can take use of useCallback hook:
// which

// functionsSet will contain a set of functions, set can only contain unique values
// but since function considered as a new object, every single re-render will cause
// new function to be added to a set.
const functionsSet = new Set();

const MemoizeCallback = props => {
  // Keep in mind, that those function that passed in from class component
  // will still be treated as a unique functions and will not be added to a set more than once
  const { counter1, counter2, count1, count2 } = props;

  // since we are inlining this function in functional component
  // every time component re-render this new object (new reference) will be created
  // and this same function will keep stacking in our Set - which is not what we want
  const logTest = () => console.log("Test");

  // This where we want to take of useCallback hook
  // which takes a function - that we want to memoize & array of dependencies we want to track
  const logTestMemo = useCallback(() => console.log("Test"), []);

  // add function to our set, if not memoized will seep stacking
  // else will be added only once:

  // functionsSet.add(logTest);      // => Set(5) {ƒ, ƒ, ƒ, ƒ, ƒ}
  functionsSet.add(logTestMemo); // => Set(1) {ƒ}
  // functionsSet.add(counter1);     // => Set(1) {ƒ}
  // functionsSet.add(counter2);     // => Set(1) {ƒ}
  console.log(functionsSet);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button type="button" onClick={counter1}>
        Increase Count 1
      </button>
      <button type="button" onClick={counter2}>
        Increase Count 2
      </button>
      <button type="button" onClick={logTest}>
        Log Test
      </button>
      <button type="button" onClick={logTestMemo}>
        Log Test Memoed
      </button>
      <div>{count1}</div>
      <div>{count2}</div>
    </div>
  );
};
*/

export default Parent;
