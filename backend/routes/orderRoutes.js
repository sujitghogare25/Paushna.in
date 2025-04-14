const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { verifyUser } = require("../middleware/authMiddleware");

router.post("/", verifyUser, orderController.placeOrder);
router.get("/user/:userId", verifyUser, orderController.getOrdersByUser);

module.exports = router;
