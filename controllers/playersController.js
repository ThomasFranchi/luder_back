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
        console.log(data);
      }
    });
  },


  //
  // GET game Info from ID
  //

  getPlayerId: (req,res) => {

    const id = req.params.playerId;
    usersModel.findOne({ _id: id}, (err, data) => {
      if (err) {
        console.log("PLAYER",err)
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

  deletePlayerId: (req,res) => {

    const id = req.params.gameid;
   usersModel.deleteOne({ _id: id}, (err, data) => {
    
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

module.exports = playersController;
