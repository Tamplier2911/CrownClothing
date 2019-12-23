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

// QUERY gql string to local state in order to get initial value of itemCount
const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

// QUERY gql string to local state in order to get initial value of totalPrice
const GET_TOTAL_PRICE = gql`
  {
    totalPrice @client
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
            {({ data: { cartItems } }) => (
              <Query query={GET_ITEM_COUNT}>
                {({ data: { itemCount } }) => (
                  <Query query={GET_TOTAL_PRICE}>
                    {({ data: { totalPrice } }) => {
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
                      return (
                        <div style={{ display: "flex" }}>
                          <button
                            disabled={cartItems.length ? false : true}
                            onClick={() =>
                              removeItemFromCartMut({
                                variables: { item: itemToRemove }
                              })
                            }
                          >
                            -
                          </button>
                          <div>Cart Length: {cartItems.length} | </div>
                          <div>Cart Total Count: {itemCount} | </div>
                          <div>Cart Total Price: {totalPrice} | </div>
                          <button
                            disabled={cartItems.length >= 10 ? true : false}
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
                    }}
                  </Query>
                )}
              </Query>
            )}
          </Query>
        )}
      </Mutation>
    )}
  </Mutation>
);

/*

// Compose Pattern - is good choice to add more readability to component
// In order to use Compose Pattern we going to need couple functions:
// flowRight - function is required from lodash lib
// graphql - native react-apollo function

const TestComponentUsingComposePattern = ({
  addItemToCartMut,
  removeItemFromCartMut,
  cartItems,
  itemCount,
  totalPrice
}) => {
  return (
    <div>
      <button onClick={() => removeItemFromCartMut(*item here*)}>-</button>
      <div>Total Items Length: {cartItems.length}</div>
      <div>Total Cart Count: {itemCount}</div>
      <div>Total Cart Price: {totalPrice}</div>
      <button onClick={() => addItemToCartMut(*item here*)}>+</button>
    </div>
  );
};

export default flowRight(
  graphql(ADD_ITEM_TO_CART, { name: "addItemToCartMut" }),
  graphql(REMOVE_ITEM_FROM_CART, { name: "removeItemFromCartMut" }),
  graphql(GET_CART_ITEMS, { name: "cartItems" }),
  graphql(GET_ITEM_COUNT, { name: "itemCount" }),
  graphql(GET_TOTAL_PRICE, { name: "totalPrice" })
)(TestComponentUsingComposePattern);

*/

/*

// Example of Deep Container Pattern
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
