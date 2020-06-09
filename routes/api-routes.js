const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/test", (req, res) => {
  res.send({ mes: "hello from the api" });
});

router.get("/api/test2", (req, res) => {
  res.send({ mes: "hey" });
});

module.exports = router;
