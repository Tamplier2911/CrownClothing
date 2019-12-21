import { gql } from "apollo-boost";

// type definitions
// extend all existing mutations that we have access to from back-end
// ToggleCartHidden is a mutation that always should return boolean value
export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`;

// read current value of cart, before changing to opposit
// using client directive @client - to specify for apollo that this value
// stored on clinet side cache | store
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

// resolvers
// _root        - top level object  (parent object)
// _args        - arguments that we get access to
// _contexts    - includes cache and client it self
// _info        - information about query
export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, _contexts, _info) => {
      // { cartHidden }
      // perform read query to get current value of hidden
      const data = _contexts.cache.readQuery({
        query: GET_CART_HIDDEN
        // variables: "if needed"
      });
      // perform mutate query to change current value to opposite
      _contexts.cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !data.cartHidden }
      });
      return !data.cartHidden;
    }
  }
};
