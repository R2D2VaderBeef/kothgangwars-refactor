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
  updatePlayerByName: (name, inserts, data) => {
    if (inserts.length != data.length) return false;
    let query = "UPDATE scores SET";
    inserts.forEach((item, i) => {
      query = query + " " + item + " = " + data[i] + ",";
    });
    query = query.slice(0, query.length - 1);
    query = query + " WHERE playername='" + name + "';";
    console.log(query);
    client.query(query);
  },
  checkForPlayerByName: (name) => {
    return client.query(
      "SELECT EXISTS(SELECT 1 FROM scores WHERE playername='" + name + "');"
    );
  },
};
