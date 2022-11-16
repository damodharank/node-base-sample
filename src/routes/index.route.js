const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    console.log("DAADAD")
    res.send("Sample Node API Version1")
});
router.get("/dashboard", (req, res) => {
  res.send("Dashboard page ...");
});




module.exports = router;