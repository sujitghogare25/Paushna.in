const db = require("../config/db");

const User = {
  create: async (user) => {
    const query = "INSERT INTO users (email, password) VALUES (?, ?)";
    const [result] = await db.execute(query, [user.email, user.password]);
    return result;
  },

  findByEmail: async (email) => {
    const query = "SELECT * FROM users WHERE email = ?";
    const [rows] = await db.execute(query, [email]);
    return rows[0]; // Return the first user if found
  },
};

module.exports = User;