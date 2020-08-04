const { Client } = require("pg");
const client = new Client({
  user: "susul",
});
client.connect();

test();

async function test() {
  const test = await client.query("SELECT NOW()");
  await client.end();

  console.log(test.rows[0]);
}
