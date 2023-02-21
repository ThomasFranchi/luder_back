const express = require("express");
const app = require("../app");
const router = express.Router();
const playersController = require("../controllers/playersController")


router.get("/", playersController.getPlayersList)
router.get("/me",playersController.getPlayerMe);
// router.get("/:me/gamesCollection", playersController.getPlayerGameCollection)
router.put("/:me/gamesCollection", playersController.addGameCollection)
// router.get("/:me/sessions", playersController.getPlayerGameCollection)
// router.get("/:me/posts", playersController.getPlayerGameCollection)

router.get("/:playerId", playersController.getPlayerId)
// router.get("/:playerId/gamesCollection", playersController.getPlayerGameCollection)
router.put("/:playerId", playersController.putPlayerId)
router.delete("/:playerId", playersController.deletePlayerId)

module.exports = router;