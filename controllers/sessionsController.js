const sessionsModel = require("../models/sessionsModel");

const sessionsController = {

    postSession: (req,res) => {

        const {
            sessionGame,
            sessionDate,
            sessionName,
           /*sessionOwner*/
            sessionDescription,
            availableSpots,
            onLine,
            local,
            mixed,
            lat,
            lon,
            onlineLocation,
            sessionStatus,
            likesTODO,
            posts,
            nickName,
            userId,
            postAuthor,
            postAuthorId,
            postPublicationDate,
            postContent,
            postLikes,

        } = req.body;

        const session = new sessionsModel({
            sessionGame,
            sessionDate,
            sessionName,
            //sessionOwner
            sessionDescription,
            availableSpots,
            onLine,
            local,
            mixed,
            lat,
            lon,
            onlineLocation,
            sessionStatus,
            likesTODO,
            // schema Players for register User
            nickName,
            userId,
            // schema Post
            postAuthor,
            postAuthorId,
            postPublicationDate,
            postContent,
            postLikes,
        });

        session.save((err, data) => {
            if (err) {
                // console.log(Object.keys(err.keyPattern)[0])
                res.status(422).json({message:"La session n'a pas pu être créé"});
                console.log(err)
                return;
            } else {
                res.json("Session créée");
                // return;
            }
          })


    },


    getsessionList: (req,res)  => {

        const {
            sessionDate,
            sessionName,
           /*sessionOwner*/
            sessionDescription,
            availableSpots,
            onLine,
            local,
            mixed,
            lat,
            lon,
            onlineLocation,
            sessionStatus,
            likesTODO,
            posts,
            nickName,
            userId,
            postAuthor,
            postAuthorId,
            postPublicationDate,
            postContent,
            postLikes,

        } = req.body;


        sessionsModel.find({}, (err, data) => {
            if (err) {
              console.log(err);
              res.status(404).json({ message: "Erreur" });
            } else {
              // Renvoi de la data trouvée dans la BDD
              res.json(data);
              console.log(data)
            }
          });


        
    

    }

};

module.exports = sessionsController;