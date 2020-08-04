const sqlite3 = require("sqlite3").verbose();

module.exports = {
  getPlayerByName: (name) => {
    db = connect();
    // retriving
    close(db);
  },
};

function connect() {
  return new sqlite3.Database("players.db", (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
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
