const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController")

router.post("/", registerController.postRegister)
router.get("/", registerController.getRegistered)

module.exports = router;