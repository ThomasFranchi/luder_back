const express = require("express");
const app = require("../app");
const router = express.Router();
const gamesController = require("../controllers/gamesController")


router.get("/", gamesController.getGamesList)
router.post("/", gamesController.postGames)

router.get("/:gameId", gamesController.getGameId)
router.put("/:gameId", gamesController.putGameId)
router.delete("/:gameid", gamesController.deleteGameId)



module.exports = router;