const application = require('./application');
const files = require('./files');

module.exports = {
  Query: {
    ...application.queries,
  },
  Mutation: {
    ...application.mutations,
    ...files.mutations,
  },
};
