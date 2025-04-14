const db = require("./db");

exports.createOrder = (userId, total) => {
  return db.query("INSERT INTO orders (user_id, total) VALUES (?, ?)", [
    userId,
    total,
  ]);
};

exports.addOrderItem = (orderId, productId, quantity, price) => {
  return db.query(
    "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
    [orderId, productId, quantity, price]
  );
};

exports.getByUser = (userId) => {
  return db.query("SELECT * FROM orders WHERE user_id = ?", [userId]);
};
