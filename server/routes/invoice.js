const express = require("express");

const receiptsController = require("../controllers/shipments/receipts");

const router = express.Router();

router.post("/receipts", receiptsController.createReceipt);

router.post("/get-receipts", receiptsController.getReceipts);

router.put("/receipts", receiptsController.updateReceipts);

module.exports = router;
