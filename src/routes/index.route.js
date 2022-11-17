
const express = require("express");
const profile = require("./profile.route");
const swagger = require("./swagger.route");


const router = express.Router();

router.use("/profile", profile);
router.use("/", swagger);

 
// router.get("/", (req, res) => res.send("Sample Node base apps "));
router.get("/health", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;
