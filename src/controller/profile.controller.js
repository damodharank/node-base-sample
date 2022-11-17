
const profileService = require("../services/profile.services");

const get = function (req, res) {
  res.send(profileService.get(req.params.id));
};

const getAll = function (req, res) {
  res.send(profileService.getAll());
};

module.exports = {
  get,
  getAll,
};
