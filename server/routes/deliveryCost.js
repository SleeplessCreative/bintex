const express = require("express");

const costController = require("../controllers/deliveryCost");

const router = express.Router();

router.get("/city", costController.getCityId);

router.get("/cost", costController.getCost);

module.exports = router;
