const express = require("express");
const router = express.Router({ mergeParams: true });
const profileController = require("../controller/profile.controller");
router.route("/").get(profileController.getAll);
router.route("/:_id").get(profileController.get);
module.exports = router;
