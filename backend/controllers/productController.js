const db = require("../models/db");

exports.getAllProducts = async (req, res) => {
  try {
    const [products] = await db.query("SELECT * FROM products");
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const [product] = await db.query("SELECT * FROM products WHERE id = ?", [
      req.params.id,
    ]);
    if (product.length === 0)
      return res.status(404).json({ message: "Product not found" });
    res.json(product[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  const { name, description, price, image_url, size, stock } = req.body;
  try {
    await db.query(
      "INSERT INTO products (name, description, price, image_url, size, stock) VALUES (?, ?, ?, ?, ?, ?)",
      [name, description, price, image_url, size, stock]
    );
    res.status(201).json({ message: "Product created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { name, description, price, image_url, size, stock } = req.body;
  try {
    await db.query(
      "UPDATE products SET name=?, description=?, price=?, image_url=?, size=?, stock=? WHERE id=?",
      [name, description, price, image_url, size, stock, req.params.id]
    );
    res.json({ message: "Product updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await db.query("DELETE FROM products WHERE id = ?", [req.params.id]);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
