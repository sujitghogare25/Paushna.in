const db = require("./db");

exports.getAllOrders = () => {
  return db.query("SELECT * FROM orders");
};

exports.updateOrderStatus = (orderId, status) => {
  return db.query("UPDATE orders SET status = ? WHERE id = ?", [
    status,
    orderId,
  ]);
};
