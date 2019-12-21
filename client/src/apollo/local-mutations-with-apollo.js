import React from "react";
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";

// MUTATION gql string to local state in order to perform state mutation
const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

// MUTATION component
// that goign to perform mutations
export const LocalStateMutationComponent = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleCartHidden => {
      // can either return component wich recieve toggleCartHidden "action creator"
      return <button onClick={toggleCartHidden}>Mutate</button>;
    }}
  </Mutation>
);

// component that rendered with value of cart hidden
const LocalStateLeverage = ({ hidden }) => {
  if (hidden) {
    return <div>Cart Is Hidden</div>;
  } else {
    return <div>Cart Is Shown</div>;
  }
};

// QUERY gql string to local state in order to get initial value of cartHidden
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

// QUERY componentd
// data is initially local state, we only need cart hidden of it.
export const LocalStateQueryComponent = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ loading, error, data: { cartHidden } }) => {
      if (loading) {
        return <div>...Loading Spinner</div>;
      } else {
        return (
          <div>
            <LocalStateLeverage hidden={cartHidden} />
          </div>
        );
      }
    }}
  </Query>
);

// export default LocalStateQueryComponent;
