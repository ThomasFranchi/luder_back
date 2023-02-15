const usersModel = require("../models/usersModel");

const registerController = {

    // New method for registering user
  postRegister: (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      nickName,
      age,
      address1,
      address2,
      zipCode,
      city,
      country,
    } = req.body;

console.log(req.body)
    // Use registerModel 
    const newUser = new usersModel({
      firstName,
      lastName,
      email,
      password,
      nickName,
      age,
      address1,
      address2,
      zipCode,
      city,
      country,
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
            res.status(422).json({message:"Votre inscription n'a pas pu être effectué."});
            return;
        } else {
            res.json("Inscription effectuée");
            // return;
        }
    })
},
};

module.exports = registerController;
