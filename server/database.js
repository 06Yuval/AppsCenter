const { Pool } = require("pg");

async function connection() {
  const connection = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Aa123456",
    database: "postgres",
  });
  try {
    return connection;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connection };

