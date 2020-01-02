import React, { useMemo } from "react";

// useMemo - hook returns a memoized value (output of the function),
// when passed in a "create function" and an array of dependencies
// will only recompute the memoized value when one of the dependencies has changed
// this optimization helps to avoid expensive calculations on every render

// function passed to useMemo runs during rendering

const MemoizedValue = ({ value }) => {
  // complex task - is no longer function but a value
  // this function will re-calculate only when dependency changed
  // dependency that we rely on is our input value (or prop that we recieve)
  // useMemo.js:26 Computing complex calculation! <- renders just once
  const getFactorMemoizedValue = useMemo(() => {
    console.log("Computing complex calculation!");
    let factorial = 1;
    for (let i = value; i > 0; i--) {
      factorial *= i;
    }
    return factorial;
  }, [value]);

  // complex task function - is a function not a vlue untill invoked
  // this inline function will re-compute every single time when component re-renders
  // useMemo.js:26 Computing complex calculation!
  // useMemo.js:26 Computing complex calculation!
  // useMemo.js:26 Computing complex calculation!
  const getFactor = n => {
    console.log("Computing complex calculation!");
    let factorial = 1;
    for (let i = n; i > 0; i--) {
      factorial *= i;
    }
    return factorial;
  };

  return (
    <div>
      <div>{getFactor(53)}</div>
      <div>{getFactorMemoizedValue}</div>
    </div>
  );
};

export default MemoizedValue;
