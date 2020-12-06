const express = require("express");

const driverController = require("../controllers/driver/driver");

const router = express.Router();

router.post("/deliver", driverController.deliver);
router.get("/get-driver-histories", driverController.getHistory);
router.post("/regist-driver", driverController.registerDriver);
router.get("/get-driver", driverController.getAllDriver);
router.get("/get-user-driver", driverController.getAllUserWithRoleDriver);

module.exports = router;
