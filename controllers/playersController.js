const mongoose = require("mongoose");
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

  getPlayerId: (req, res) => {
    const id = req.params.playerId;
    usersModel.findOne({ _id: id }, (err, data) => {
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

  getPlayerMe: (req, res) => {
    res.json(req.user);
  },

  //
  // DELETE PLAYER
  //

  deletePlayerId: (req, res) => {
    const id = req.user._id;
    usersModel.deleteOne({ _id: id }, (err, data) => {
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

  putPlayerId: async (req, res) => {
    const {
      firstName,
      lastName,
      nickName,
      email,
      //password,
      age,
      //gameCollection,
    } = req.body;

    const user = req.user;

    // Validations

    user.firstName = firstName ?? user.firstName;
    user.lastName = lastName ?? user.lastName;
    user.nickName = nickName ?? user.nickName;
    user.email = email ?? user.email;
    user.age = age ?? user.age;
    //user.gameCollection = gameCollection ?? user.gameCollection

    try {

      if(password) {
        user.password = await brypt.hash(password, 10);
      }
  
      await user.save();
      res.json({message: "Utilisateur mis à jour"});
    } catch(e) {
      console.log(e);
      res.status(500).json({message: "Une erreur s'est produite"})
    }


    // const acceptedProperties = [
    //   "firstName",
    //   "lastName",
    //   "nickName",
    //   "email",
    //   "password",
    //   "age",
    // ];

    // const _id = req.user._id;

    // const update = Object.keys(req.body).reduce((a, property) => {
    //   if(acceptedProperties.includes(property)) {
    //     return {...a, [property]: req.body[property]};
    //   }

    //   return a;
    // }, {});

    // usersModel.updateOne(
    //   { _id: _id },
    //   { $set: update},
    //   (err) => {
    //     console.log(req.user);
    //     if (err) {
    //       console.log(err);
    //       res.status(404).json({ message: "Erreur" });
    //     } else {
    //       res.json({ message: "profil modifié" });
    //     }
    //   }
    // );
  },

  async addGameCollection(req, res, next) {
    const { game } = req.body; // {title: String, gameId: ObjectId}
    const user = req.user;

    if(!user.gameCollection || !Array.isArray(user.gameCollection)) {
      user.gameCollection = [];
    }

    user.gameCollection.push(game);

    try {
      await user.save();
      res.json({message: "Jeu ajouté à dans la collection de l'utilisateur"});
    } catch(e) {
      console.log(e);
      res.status(500).json({message: "Une ereur s'est produite"})
    }
  }
};

module.exports = playersController;
