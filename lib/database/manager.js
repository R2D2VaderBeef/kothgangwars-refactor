const { Client } = require("pg");
const connectionString =
  process.env.DATABASE_URL | "postgresql://susul:null@localhost:5432";

const client = new Client({});
client.connect();

module.exports = {
  getAllScores: () => {
    return client.query("SELECT * FROM scores;");
  },
};
