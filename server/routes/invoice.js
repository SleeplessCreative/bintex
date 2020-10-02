const express = require("express");

const receiptsController = require("../controllers/receipts");

const router = express.Router();

router.post("/receipts", receiptsController.createReceipt);

router.get("/receipts", receiptsController.getReceipts);

module.exports = router;
