const { Client } = require("pg");
const connectionString =
  process.env.DATABASE_URL | "postgresql://susul:null@localhost:5432";

const client = new Client({});
client.connect();

module.exports = {
  getAllScores: () => {
    return client.query("SELECT * FROM scores;");
  },
  getPlayerByName: (name) => {
    return client.query(
      "SELECT * FROM scores WHERE playername LIKE " + "'" + name + "'" + ";"
    );
  },
  updatePlayerByName: (name, inserts, data) => {},
  checkForPlayerByName: (name) => {
    return client.query(
      "SELECT EXISTS(SELECT 1 FROM scores WHERE playername='" + name + "');"
    );
  },
};
