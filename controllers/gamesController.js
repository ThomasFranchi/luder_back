const mongoose = require("mongoose")
const gamesModel = require("../models/gamesModel");

const gamesController = {


  //
  // New method to GET list of games
  //

  getGamesList: (req, res) => {
    const {
      title,
      editor,
      edition,
      releaseDate,
      language,
      minPlayers,
      maxPlayers,
      minRecommendedAge,
    } = req.body;

    gamesModel.find({}, (err, data) => {
      if (err) {
        console.log(err);
        res.status(404).json({ message: "Erreur" });
      } else {
        // Renvoi de la data trouvée dans la BDD
        res.json(data);
        console.log(data);
      }
    });
  },

  //
  // POST A GAME
  //

  postGames: (req, res) => {
    const {
      title,
      editor,
      edition,
      releaseDate,
      language,
      minPlayers,
      maxPlayers,
      minRecommendedAge,
      averageDuration,
    } = req.body;

    const game = new gamesModel({
      title,
      editor,
      edition,
      releaseDate,
      language,
      minPlayers,
      maxPlayers,
      minRecommendedAge,
      averageDuration,
    });

    if (
      typeof title !== "string" ||
      typeof editor !== "string" ||
      typeof edition !== "string" ||
      typeof language !== "string"
    ) {
      res.json({
        success: false,
        message:
          " Les champs titre, Editeur, Edition et langue doivent être du texte",
      });
      return;
    }

    if (
      releaseDate <= 0 ||
      minPlayers <= 0 ||
      maxPlayers <= 0 ||
      minRecommendedAge <= 0 ||
      averageDuration <= 0
    ) {
      res.json({
        success: false,
        message:
          " Les champs Année de sortie, Nb de joueurs, Age minimal et durée moyenne doivent être des nombres positifs",
      });

      return;
    }

    game.save((err, data) => {
      console.log(err)
      if (err !== null && err.code == 11000) {
        res
          .status(422)
          .json({
            sucess: false,
            message:
              "Ce jeu existe déjà dans la liste, vous ne pouvez pas l'ajouter une nouvelle fois.",
          });
        return;

      } else if (err) {
        // console.log(Object.keys(err.keyPattern)[0])
        res
          .status(422)
          .json({ success: false, message: "Le jeu n'a pas pu être ajouté" });
 
        return;

      } else {
        res.json({ success: true, message: "Jeu ajouté" });
        // return;
      }
    });
  },

  //
  // GET game Info from ID
  //

  getGameId: (req,res) => {

    const id = req.params.gameId;
    gamesModel.findOne({ _id: id}, (err, data) => {
      if (err) {
        console.log("GAME",err)
        res.status(404).json({ message: "Erreur" });
      } else {
        // Renvoi de la data trouvée dans la BDD
        res.json(data);

      }
    });
    },

  //
  // DELETE game  
  //

  deleteGameId: (req,res) => {

    const id = req.params.gameid;
   gamesModel.deleteOne({ _id: id}, (err, data) => {
    
      if (err) {
        console.log(err);
        res.status(404).json({ message: "Erreur" });
      } else {
        // Renvoi de la data trouvée dans la BDD
        res.json(data);
        console.log("DATA",data);
      }
    });
    },


  //
  // PUT game  
  //

  putGameId: (req,res) => {

    const {
      title,
      editor,
      edition,
      releaseDate,
      language,
      minPlayers,
      maxPlayers,
      minRecommendedAge,
      averageDuration,
    } = req.body;

    const game = new gamesModel({
      title,
      editor,
      edition,
      releaseDate,
      language,
      minPlayers,
      maxPlayers,
      minRecommendedAge,
      averageDuration,
    });


    const _id = req.params.gameId;

  gamesModel.findByIdAndUpdate({id: req.params.gameId},  game, (err, game) => {

      if (err) {
        console.log("ERRE",err);
        res.status(404).json({ message: "Erreur" });
      } else {
        // Renvoi de la data trouvée dans la BDD
        res.json(game);
        console.log("DATA",game);
      }
    });
    },

};

module.exports = gamesController;
