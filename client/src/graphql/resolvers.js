import { gql } from "apollo-boost";
import { addItemToCart, decrementQuantity } from "./cart-utils";

// type definitions
// extend all existing mutations that we have access to from back-end
// ToggleCartHidden is a mutation that always should return boolean value
// extending type of Item, adding property of quantity which may or may not be there
// AddItemToCart is expecting for item as argument, returning array of Item class which is a must
export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
    RemoveItemFromCart(item: Item!): [Item]!
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

// read current value of items array
// using client directive @client - to specify for apollo that this value
// stored on client side cache | store
const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

// resolvers
// _root        - top level object  (parent object)
// _args        - arguments that we get access to
// _contexts    - includes cache and client it self
// _info        - information about query
export const resolvers = {
  Mutation: {
    toggleCartHiddenMut: (_root, _args, _contexts, _info) => {
      // { cartHidden }
      // perform read query to get current value of hidden
      const data = _contexts.cache.readQuery({
        query: GET_CART_HIDDEN
        // variables: "if needed"
      });
      // perform mutation query to change current value to opposite
      _contexts.cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !data.cartHidden }
      });
      return !data.cartHidden;
    },
    addItemToCartMut(_root, _args, _contexts, _info) {
      //_args.item and _contexts.cache are same as destructuring { item } & { cache };
      // query for initial state of cartItems
      const data = _contexts.cache.readQuery({
        query: GET_CART_ITEMS
      });
      // add new item to cartItems levereging helper function - save new value of cart items
      const newCartItems = addItemToCart(data.cartItems, _args.item);
      // perform mutation query, same new value of cart items to cartItems & return it
      _contexts.cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems }
      });
      return newCartItems;
    },
    removeItemFromCartMut(_root, _args, _contexts, _info) {
      // query for initial state of cartItems
      const data = _contexts.cache.readQuery({
        query: GET_CART_ITEMS
      });
      // remove item from cartItems levereging helper function - save new value
      const newCartItems = decrementQuantity(data.cartItems, _args.item);
      // perform mutation query, revwrite value of cartItems to newCartItems & return it
      _contexts.cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems }
      });
      return newCartItems;
    }
  }
};
