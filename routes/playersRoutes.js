const express = require("express");
const app = require("../app");
const router = express.Router();
const playersController = require("../controllers/playersController")


router.get("/", playersController.getPlayersList)
router.get("/me",playersController.getPlayerMe);

router.get("/:playerId", playersController.getPlayerId)
router.put("/:playerId", playersController.putPlayerId)
router.delete("/:playerId", playersController.deletePlayerId)

module.exports = router;