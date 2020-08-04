const manager = require(process.cwd() + "/lib/database/manager.js");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  console.log("Database Interface was accessed");
  res.status(500).send("Database is not yet supported");
});

manager.getPlayerByName("test");

module.exports = {
  router: () => {
    return router;
  },
  retrieve: (name) => {
    const error = new Error("retrieve() not yet implemented");
    throw error;
  },
};
