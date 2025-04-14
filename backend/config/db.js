  const mysql = require("mysql2");

  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  const promisePool = pool.promise();

  // Test database connection
  promisePool
    .getConnection()
    .then((connection) => {
      console.log("✅ MySQL database connected successfully!");
      connection.release(); // Release the connection back to pool
    })
    .catch((err) => {
      console.error("❌ Failed to connect to MySQL database:", err.message);
    });

  module.exports = promisePool;
  