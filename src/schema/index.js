const { gql } = require('apollo-server-express');

const shared = require('./shared');
const application = require('./application');

const rootSchema = gql`
  type Query {
    application(id: ID): AgentApplication
  }
  type Mutation {
    createAgentApplication(
      application: AgentApplicationInput
      attachments: [Upload!]
    ): AgentApplication
    uploadFiles(files: [Upload!]): [File!]
  }
`;

module.exports = [
  shared,
  application,
  rootSchema,
];
