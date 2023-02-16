const express = require("express");
const router = express.Router();
const sessionsController = require("../controllers/sessionsController")

router.get("/", sessionsController.getsessionList)
router.post("/", sessionsController.postSession)


module.exports = router;