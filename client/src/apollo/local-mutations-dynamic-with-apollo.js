import React from "react";
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";

// MUTATION gql string to local state in order to perform state mutation
const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCartMut(item: $item) @client
  }
`;

// MUTATION gql string to local state in order to perform state mutation
const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCartMut(item: $item) @client
  }
`;

// QUERY gql string to local state in order to get initial value of cartItems
const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

// DEEP CONTAINER COMPONENT
// Which has both MUTATION and QUERY components in order to have access to both:
// selector and action creator
export const LocalStateCartItemsMutationAdd = () => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {addItemToCartMut => (
      <Mutation mutation={REMOVE_ITEM_FROM_CART}>
        {removeItemFromCartMut => (
          <Query query={GET_CART_ITEMS}>
            {({ data: { cartItems } }) => {
              const itemToAdd = {
                id: cartItems.length + 1,
                imageUrl: "https://some-url.com/",
                name: `Item-${cartItems.length + 1}`,
                price: 140
              };
              const itemToRemove = {
                id: cartItems.length,
                imageUrl: "https://some-url.com/",
                name: `Item-${cartItems.length}`,
                price: 140
              };
              if (cartItems.length) {
                return (
                  <div style={{ display: "flex" }}>
                    <button
                      onClick={() =>
                        removeItemFromCartMut({
                          variables: { item: itemToRemove }
                        })
                      }
                    >
                      -
                    </button>
                    <div>{cartItems.length}</div>
                    <button
                      onClick={() =>
                        addItemToCartMut({
                          variables: { item: itemToAdd }
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                );
              } else {
                return (
                  <div style={{ display: "flex" }}>
                    <button
                      disabled
                      onClick={() =>
                        removeItemFromCartMut({
                          variables: { item: itemToRemove }
                        })
                      }
                    >
                      -
                    </button>
                    <div>{cartItems.length}</div>
                    <button
                      onClick={() =>
                        addItemToCartMut({
                          variables: { item: itemToAdd }
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                );
              }
            }}
          </Query>
        )}
      </Mutation>
    )}
  </Mutation>
);

/*

// Example of Deep Container
const DeepContainer = () => (
  <Mutation>
    {addItemToCartMut => (
      <Query>
        {({ data: { cartItems } }) => (
          <ComponentThatNeedsStateAndMutation
            cartItems={cartItems}
            addItemsToCart={addItemToCartMut}
          />
        )}
      </Query>
    )}
  </Mutation>
);

const ComponentThatNeedsStateAndMutation = () => <div></div>;

*/
