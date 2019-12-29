import React from "react";

import { gql } from "apollo-boost";

import { Query } from "react-apollo";

// specific syntax is GraphQL language, required in order to pass parameter in, which is a must,
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
    variables={{ title: "hats" }} // <== dynamic data here e.g. {title: match.params.collectionId}
  >
    {({ loading, error, data }) => {
      if (loading) {
        // console.log(loading);
        return <div>Loading...</div>;
      } else if (error) {
        // console.log(error);
        return <div>{error.message}</div>;
      } else {
        // console.log(data);
        return (
          <div key={data.getCollectionsByTitle.id}>
            {data.getCollectionsByTitle.title}
          </div>
        );
      }
    }}
  </Query>
);

export default ComponentWithFetchedDynamicallyData;
