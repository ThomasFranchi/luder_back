const mongoose = require("mongoose")
const usersModel = require("../models/usersModel");

const playersController = {


  //
  // New method to GET list of players
  //

  getPlayersList: (req, res) => {

    usersModel.find({}, (err, data) => {
      if (err) {
        console.log(err);
        res.status(404).json({ message: "Erreur" });
      } else {
        // Renvoi de la data trouvée dans la BDD
        res.json(data);
      }
    });
  },


  //
  // GET PLAYER Info from ID
  //

  getPlayerId: (req,res) => {

    const id = req.params.playerId;
    usersModel.findOne({ _id: id}, (err, data) => {
      if (err) {
        console.log(err)
        res.status(404).json({ message: "Erreur" });
      } else {
        // Renvoi de la data trouvée dans la BDD
        res.json(data);

      }
    });
    },

      //
  // GET PLAYER Info from ID
  //

  getPlayerMe: (req,res) => {
        res.json(req.user)
      },
    

  //
  // DELETE PLAYER  
  //

  deletePlayerId: (req,res) => {

    const id = req.params.playerId;
   usersModel.deleteOne({ _id: id}, (err, data) => {
    
      if (err) {
        console.log(err);
        res.status(404).json({ message: "Erreur" });
      } else {
        // Renvoi de la data trouvée dans la BDD
        res.json(data);
      }
    });
    },


  //
  // PUT game  
  //

  putPlayerId: (req,res) => {

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

    const game = new usersModel({
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

  usersModel.findByIdAndUpdate({id: req.params.gameId},  game, (err, game) => {

      if (err) {
        console.log(err);
        res.status(404).json({ message: "Erreur" });
      } else {
        // Renvoi de la data trouvée dans la BDD
        res.json(game);
      }
    });
    },

};

module.exports = playersController;
