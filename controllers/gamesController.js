const gamesModel = require("../models/gamesModel");

const gamesController = {

    // New method to GET list of games

    getGamesList: (req,res) => {
        const {
            title, 
            editor, 
            edition , 
            releaseDate, 
            language, 
            minPlayers, 
            maxPlayers, 
            minRecommendedAge ,
         } = req.body;
    
    // const games = new gamesModel({
    //         title, 
    //         editor, 
    //         edition , 
    //         releaseDate, 
    //         language, 
    //         minPlayers, 
    //         maxPlayers, 
    //         minRecommendedAge ,
    //   });

      gamesModel.find({}, (err, data) => {
        if (err) {
          console.log(err);
          res.status(404).json({ message: "Erreur" });
        } else {
          // Renvoi de la data trouvée dans la BDD
          res.json(data);
          console.log(data)
        }
      });
    },

    postGames: (req,res) => {
      const {
          title, 
          editor, 
          edition , 
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
          edition , 
          releaseDate, 
          language, 
          minPlayers, 
          maxPlayers, 
          minRecommendedAge ,
          averageDuration,

    });

    game.save((err, data) => {
      if (err) {
          // console.log(Object.keys(err.keyPattern)[0])
          res.status(422).json({message:"Le jeu n'a pas pu être ajouté"});
          console.log(err)
          return;
      } else {
          res.json("Jeu ajouté");
          // return;
      }
    })
    },

};



module.exports = gamesController;
