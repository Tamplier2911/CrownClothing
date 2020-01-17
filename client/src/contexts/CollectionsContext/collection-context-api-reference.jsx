import React, { useContext } from "react";
import CollectionContext from "./collection-context";

// Connection of context can be done in two ways:

// Use collection context as a component, wrapping part of app that needs it.
// .Consumer    - means we want to lavarage this context consumer component.
// collections  - is an object of state, that we recieve from context.

export const CollectionExampleComponent = () => {
  return (
    <CollectionContext.Consumer>
      {collections => {
        const collection = collections[1];
        const { title, items } = collection;
        return (
          <div>
            <h3>{title}</h3>
            <div>
              {items.map(item => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
          </div>
        );
      }}
    </CollectionContext.Consumer>
  );
};

// export default CollectionExampleComponent;

// Use collection context with useContext hook.
// useContext - gets context as an argument, allows us to get the value of state and store it.

export const CollectionExampleUseContext = () => {
  const collections = useContext(CollectionContext);
  const collection = collections[2];
  const { title, items } = collection;
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {items.map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

// export default CollectionExampleUseContext;
