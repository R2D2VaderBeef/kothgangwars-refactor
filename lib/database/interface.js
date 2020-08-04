const manager = require(process.cwd() + "/lib/database/manager.js");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  console.log("Database is trying to be accessed");
  next();
});

router.get("/database", async function (req, res, next) {
  console.log("before access");
  const table = await manager.getAllScores();
  res.send(table.rows);
});

module.exports = {
  router: () => {
    return router;
  },
  retrieve: (name) => {
    const error = new Error("retrieve() not yet implemented");
    throw error;
  },
};
