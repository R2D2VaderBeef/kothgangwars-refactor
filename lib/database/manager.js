const sqlite3 = require("sqlite3").verbose();

module.exports = {
  getPlayerByName: (name) => {
    db = connect("players.db");
    // retriving code
    close(db);
  },
  updatePlayerByName: (name) => {
    db = connect("players.db");
    colse(db);
  },
};

function connect(databaseName, mode) {
  return new sqlite3.Database(databaseName, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database " + databaseName);
  });
}

function close(db) {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Closed the database connection.");
  });
}
