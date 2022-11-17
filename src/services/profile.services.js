
const data = require("../common/data");

const get = function (_id) {
  return getAll().find((profile) => profile.id == _id);
};

const getAll = function () {
  return data.Profiles;
};

module.exports = {
  get,
  getAll,
};
