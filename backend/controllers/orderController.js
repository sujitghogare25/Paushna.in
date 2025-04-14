const db = require("../models/db");

exports.placeOrder = async (req, res) => {
  const { userId, items, total } = req.body;
  try {
    const [orderResult] = await db.query(
      "INSERT INTO orders (user_id, total) VALUES (?, ?)",
      [userId, total]
    );
    const orderId = orderResult.insertId;

    for (const item of items) {
      await db.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.productId, item.quantity, item.price]
      );
    }

    res.status(201).json({ message: "Order placed", orderId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrdersByUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const [orders] = await db.query("SELECT * FROM orders WHERE user_id = ?", [
      userId,
    ]);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
