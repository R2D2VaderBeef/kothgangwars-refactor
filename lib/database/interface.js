const manager = require(process.cwd() + "/lib/database/manager.js");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  console.log("Database is trying to be accessed");
  next();
});

router.get("/database", async function (req, res, next) {
  const table = await manager.getAllScores();
  res.send(table.rows);
  console.log("Response Send");
});

module.exports = {
  router: () => {
    return router;
  },
  retrieve: (name, time) => {
    if (!time) time = 20000;
    return new Promise(async (resolve, reject) => {
      setTimeout(function () {
        reject("Request Timed Out after " + time + " Milliseconds");
      }, time);
      if (!name) reject("No Name given");

      const player = await manager.getPlayerByName(name);
      resolve(player.rows);
    });
  },
};
