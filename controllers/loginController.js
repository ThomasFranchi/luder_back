const usersModel = require("../models/usersModel");

const loginController = {

    // New method for registering user
  postRegister: (req, res) => {
    const {
      email,
      nickName,
    } = req.body;

console.log(req.body)
    // Use registerModel 
    const newUser = new usersModel({
      email,
      password,
    });

    // Check if input required input are filled 
    if (typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string" || typeof password !== "string" || typeof nickName !== "string"  ) {
        console.log("422 manque champs")
        res.status(422).json({message:"l'un ou plusieurs champs obligatoire(s) est/sont vide(s)"});
        return;
    } 
    // POST User details to DB for register
     newUser.save((err, data) => {
        if (err) {
            // console.log(Object.keys(err.keyPattern)[0])
            res.status(422).json({message:"Votre tentative de connexion a échoué."});
            return;
        } else {
            res.json("Connexion réussit");
            // return;
        }
    })
},
};

module.exports = registerController;
