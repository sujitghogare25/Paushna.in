const db = require("./db");

exports.getAll = () => db.query("SELECT * FROM products");

exports.getById = (id) => db.query("SELECT * FROM products WHERE id = ?", [id]);

exports.create = (data) => {
  const { name, description, price, image_url, size, stock } = data;
  return db.query(
    "INSERT INTO products (name, description, price, image_url, size, stock) VALUES (?, ?, ?, ?, ?, ?)",
    [name, description, price, image_url, size, stock]
  );
};

exports.update = (id, data) => {
  const { name, description, price, image_url, size, stock } = data;
  return db.query(
    "UPDATE products SET name=?, description=?, price=?, image_url=?, size=?, stock=? WHERE id=?",
    [name, description, price, image_url, size, stock, id]
  );
};

exports.remove = (id) => db.query("DELETE FROM products WHERE id = ?", [id]);
