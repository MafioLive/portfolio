import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(
  "https://api-ca-central-1.hygraph.com/v2/cl9p263ni15rr01us16va0ugq/master"
);

export const QUERY = gql`
  {
    skills(orderBy: uniqueId_ASC) {
      uniqueId
      skill
      id
      proficient
      fieldType
      image {
        url
      }
      url
    }
  }
`;
