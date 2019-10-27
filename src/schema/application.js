const { gql } = require('apollo-server-express');

module.exports = gql`
  type AgentApplication {
    name: String!
    email: String!
    phone: String!
    address: String
    zipCode: String
    attachments: [File!]
  }
  input AgentApplicationInput {
    name: String!
    email: String!
    phone: String!
    address: String
    zipCode: String
    attachments: [FileInput!]
  }
`;
