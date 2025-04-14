const db = require("./db");

exports.findByEmail = (email) => {
  return db.query("SELECT * FROM users WHERE email = ?", [email]);
};

exports.createUser = (name, email, hashedPassword) => {
  return db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );
};
