import React from "react";

// bundle of libs to handle and simplify appolo functionality
import { gql } from "apollo-boost";

// equivalent to client.query() top erform query to graphQL server
import { Query } from "react-apollo";

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
        // console.log(loading);
        return <div>Loading spinner...</div>;
      } else if (error) {
        // console.log(error);
        return <div>{error.message}</div>;
      } else {
        // console.log(data);
        // console.log(data.collections);
        return data.collections.map(collection => (
          <div key={collection.id}>{collection.title}</div>
        ));
      }
    }}
  </Query>
);

export default ComponentWithFetchedData;
