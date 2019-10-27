const { gql } = require('apollo-server-express');

module.exports = gql`
  type File {
    id: String!
    path: String!
  }
  input FileInput {
    id: String!
    path: String!
  }
`;
