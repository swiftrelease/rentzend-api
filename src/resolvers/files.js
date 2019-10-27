const shortid = require('shortid');
const { last } = require('lodash');

const uploadFiles = async (parent, args) => {
  const fileData = await Promise.all(args.files);
  // we would actually save the files somewhere here
  return fileData.map((it) => {
    const extension = last(it.filename.split('.'));
    const id = shortid.generate();
    return {
      id,
      path: `/tmp/${id}.${extension}`,
    };
  });
};

const mutations = {
  uploadFiles,
};

module.exports = {
  mutations,
};
