const { Client } = require("pg");
const client = new Client({
  user: "scores",
});

client.connect();

client
  .query("SELECT NOW() as now")
  .then((res) => console.log(res.rows[0]))
  .catch((e) => console.error(e.stack));

module.exports = {
  getPlayerByName: (name) => {},
};
