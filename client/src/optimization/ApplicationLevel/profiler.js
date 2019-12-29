import React, { Profiler } from "react";

// Profiler API - is just little component that allow us to check
// how much time it takes for our components to render or mount.

// Profiler can be added anywhere in a React tree to measure
// the cost of rendering that part of the tree.

// It requires two props: an id (string) and an onRender callback (function)
// which requires several useful properties, that then can we can profile
// React calls this callback any time a component within the tree “commits” an update.

const ParentComponent = () => {
  return (
    <div>
      <Profiler
        id="Directory"
        onRender={(
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime,
          interactions
        ) => {
          console.log({
            profilersID: id,
            phaseMountUpdate: phase,
            timeSpendRendering: actualDuration,
            mostRecentRender: baseDuration,
            renderStart: startTime,
            updateCommited: commitTime,
            interactionsRenderSetstate: interactions
          });
        }}
      >
        <ComponentThatBeingTested />
      </Profiler>
    </div>
  );
};

const ComponentThatBeingTested = () => {
  return (
    <div>
      <div>Hello, friends.</div>
    </div>
  );
};

export default ParentComponent;
