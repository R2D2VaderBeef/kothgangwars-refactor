const { Client } = require("pg");
const client = new Client({
  user: "susul",
  password: "0",
});
client.connect();
client.query("SELECT $1::text as message", ["Hewwo world!"], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message); // Hello World!
  client.end();
});
