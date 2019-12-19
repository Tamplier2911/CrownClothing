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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);

/*

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
import { ApolloClient, gql } from "apollo-boost";

// equivalent to client.query() top erform query to graphQL server
import { Query } from "react-apollo";

///////////////////////////////////////////////////////////////

// establishing connection to a back-end
const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com"
});

// creating cache
const cache = new InMemoryCache();

// creating apollo client
const client = new ApolloClient({
  link: httpLink,
  cache: cache
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

// get all collections from apollo server
const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        imageUrl
      }
    }
  }
`;

// create wrapper component which returns Query component, that gets query value as query property
// query then will return a function, where we destructure loading, error and data out of query object
// depends on loading, error or data, we return loading spinner, error popup or fetched collections
const ComponentWithFetchedData = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, error, data }) => {
      if (loading) {
        console.log(loading);
        return <div>Loading spinner...</div>;
      } else if (error) {
        console.log(error);
        return <div>{error.message}</div>;
      } else {
        console.log(data);
        console.log(data.collections);
        return data.collections.map(collection => (
          <div key={collection.id}>{collection.title}</div>
        ));
      }
    }}
  </Query>
);

// specific syntax is GraphQL language, required in order to pass parameter in, which is a must
// in order to pass parameter to a query we use variables property, which takes object of values
const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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
`;

// create wrapper component which returns Query component, that gets query value as query property
// as well as object with required query parameters in a varibles property
// query then will return a function, where we destructure loading, error and data out of query object
// depends on loading, error or data, we return loading spinner, error popup or fetched collections
const ComponentWithFetchedDynamicallyData = () => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: "hats" //<== dynamic data here}}
  >
    {({ loading, error, data }) => {
      if (loading) {
        console.log(loading);
        return <div>Loading...</div>;
      } else if (error) {
        console.log(error);
        return <div>{error.message}</div>;
      } else {
        console.log(data);
        return (
          <div key={data.getCollectionsByTitle.id}>
            {data.getCollectionsByTitle.title}
          </div>
        );
      }
    }}
  </Query>
);

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
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.querySelector("#root")
);

*/
