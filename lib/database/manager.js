const { Client } = require("pg");
const connectionString =
  process.env.DATABASE_URL | "postgresql://susul:null@localhost:5432";

const client = new Client({});
client.connect();

test();

async function test() {
  const test = await client.query("SELECT * FROM scores");
  await client.end();

  console.log(test.rows);
}
