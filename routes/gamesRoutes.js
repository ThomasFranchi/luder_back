const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gamesController")

router.get("/", gamesController.getGamesList)
router.post("/", gamesController.postGames)


module.exports = router;