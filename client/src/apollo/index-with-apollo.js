/*

// GRAPH QL + APOLLO REFERENCE

import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// router
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

// redux-persist
import { PersistGate } from "redux-persist/integration/react";

/////////////////////////////////////////////////////////////

// APOLLO SETUP

// allow cached data to be accessed by app
import { ApolloProvider } from "react-apollo";

// let us connect our client to /graophql endpoint
import { createHttpLink } from "apollo-link-http";

// data cacher
import { InMemoryCache } from "apollo-cache-inmemory";

// bundle of libs to handle and simplify appolo functionality
// import { ApolloClient, gql } from "apollo-boost";
import { ApolloClient } from "apollo-boost";

// equivalent to client.query() top erform query to graphQL server
// import { Query } from "react-apollo";

// resolvers and types
import { resolvers, typeDefs } from "./graphql/resolvers";

///////////////////////////////////////////////////////////////

// TESTING COMPONENTS

import {
  LocalStateQueryComponent,
  LocalStateMutationComponent
} from "./apollo/local-mutations-with-apollo";

import { LocalStateCartItemsMutationAdd } from "./apollo/local-mutations-dynamic-with-apollo";

import ComponentWithFetchedDynamicallyData from "./apollo/queries-dynamic-with-apollo";

import ComponentWithFetchedData from "./apollo/queries-static-with-apollo";

////////////////////////////////////////////////////////////////

// establishing connection to a back-end
const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com"
});

// creating cache
const cache = new InMemoryCache();

// creating apollo client
const client = new ApolloClient({
  link: httpLink,
  cache: cache,
  resolvers: resolvers,
  typeDefs: typeDefs
});

// Laverage local state in Apollo
// Cache - is our local state
client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0,
    totalPrice: 0
  }
});

// testing apollo client by requesting data from server
client
  .query({
    query: gql`
      {
        getCollectionsByTitle(title: "hats") {
          id
          title
          items {
            id
            name
            price
            imageUrl
          }
        }
      }
    `
  })
  .then(res => console.log(res));

// provide access to context of data that stored in apollo +
// get ability make requests with apollo to app
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
          <ComponentWithFetchedData />
          <ComponentWithFetchedDynamicallyData />
          <LocalStateQueryComponent />
          <LocalStateMutationComponent />
          <LocalStateCartItemsMutationAdd />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.querySelector("#root")
);

*/
