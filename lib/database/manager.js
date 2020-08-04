const sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database("players", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

module.exports = {
  getPlayerByName: (name) => {},
};
