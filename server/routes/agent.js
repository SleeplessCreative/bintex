const express = require("express");

const agentController = require("../controllers/agent/agent");

const router = express.Router();

router.post("/regist-agent", agentController.registerAgent);
router.get("/get-agent", agentController.getAllAgent);
router.get("/get-user-agent", agentController.getAllUserWithRoleAgent);

module.exports = router;
