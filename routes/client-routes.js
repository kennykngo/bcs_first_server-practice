const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/index.html")); // path.join(__dirname ...) will find the path when placing onto Heroku's servers
});

module.exports = router;
