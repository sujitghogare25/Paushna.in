const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { verifyAdmin } = require("../middleware/authMiddleware");

router.get("/orders", verifyAdmin, adminController.getAllOrders);
router.put(
  "/orders/:id/status",
  verifyAdmin,
  adminController.updateOrderStatus
);

module.exports = router;
