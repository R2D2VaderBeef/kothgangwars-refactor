const manager = require(process.cwd() + "/lib/database/manager.js");
const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  console.log("Database is trying to be accessed over Web");
  next();
});
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/updatePlayer", async function (req, res) {
  const body = request.body;
  const name = body.name;
  const positions = body.positions;
  const data = body.data;
  const exists = await manager.checkForPlayerByName(name);
  if (exists.rows[0].exists) {
    let sucess = await manager.updatePlayerByName(name, positions, data);
    res.send(sucess);
  } else {
    let sucess = await manager.createPlayerByName(name, positions, data);
    res.send(sucess);
  }
});

router.get("/players", async function (req, res, next) {
  if (req.query.name) {
    const table = await manager.getPlayerByName(req.query.name);
    res.send(table.rows);
    console.log("Response for Player '" + req.query.name + "' Send");
  } else {
    const table = await manager.getAllScores();
    res.send(table.rows);
    console.log("Response for Whole Database Send");
  }
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
  insert: (name, positions, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!name || !positions || !data) reject("Arguments Missing");
        const exists = await manager.checkForPlayerByName(name);
        if (exists.rows[0].exists) {
          let sucess = await manager.updatePlayerByName(name, positions, data);
          resolve(sucess);
        } else {
          let sucess = await manager.createPlayerByName(name, positions, data);
          resolve(sucess);
        }
      } catch (e) {
        reject(e);
      }
    });
  },
};
