const { mutations: { uploadFiles } } = require('./files');

const application = () => ({
  name: 'dummy data',
  email: 'dummy data',
  phone: 'dummy data',
});

const createAgentApplication = async (parent, args) => {
  const attachments = await uploadFiles(null, { files: args.attachments });
  return {
    ...args.application,
    attachments,
  };
};

const queries = {
  application,
};

const mutations = {
  createAgentApplication,
};

module.exports = {
  queries,
  mutations,
};
