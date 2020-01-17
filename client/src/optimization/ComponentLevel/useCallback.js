import React, { useCallback } from "react";

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

  // functionsSet.add(logTest);     // => Set(5) {ƒ, ƒ, ƒ, ƒ, ƒ}
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

export default MemoizeCallback;
