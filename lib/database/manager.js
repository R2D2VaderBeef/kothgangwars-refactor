const sqlite3 = require("sqlite3").verbose();

module.exports = {
  getPlayerByName: (name) => {
    db = connect("players.db");
    // retriving
    close(db);
  },
};

function connect(databaseName) {
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
