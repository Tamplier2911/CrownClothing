import React from "react";

// Using React.memo HOC right on component definition:
// this will prevent functional component from re-rendering every time
// it called with previous satate (which will be memoized)
const MemoizedFunctionalComponent = ({ person }) => {
  console.log("re-rendering function");
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </div>
  );
};

export default React.memo(MemoizedFunctionalComponent);

// Can aswell wrap exporting component
// export default React.memo(Person);

// The caveat at React.memo() is that initial rendering of mmoized
// component takes longer than rendering of normal component.
// Therefore we can save a lot of re-rendering time for components
// which are expected to get non-changing state a lot.e
