const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

const  registerController = {

    // Method for registering user
     postRegister: async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      nickName,
      age,
    } = req.body;


    // encrypt password
    const hashedpassword = await bcrypt.hash(password, 10);

    // Use registerModel 

    const newUser = new usersModel({
      firstName,
      lastName,
      email,
      password: hashedpassword,
      nickName,
      age,
    });

    console.log(newUser);

    // Check if input required input are filled 

    if (typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string" || typeof password !== "string" || typeof nickName !== "string"  ) {
        console.log("422 manque champs")
        res.status(422).json({messageError:"l'un ou plusieurs champs obligatoire(s) est/sont vide(s)"});
        return;
    } 
    
    // POST User details to DB for register
     newUser.save((err, data) => {
      
      //Check if Unique fields are duplicate. 
      if (err !== null && err.code == 11000) {
        res
          .status(422)
          .json({
            sucess: false,
            message:
              "Email ou Pseudo existe déjà !",
          });
        return;
      } else if (err) {
            res.status(422).json({messageError:"Votre inscription n'a pas pu être effectué."});
            return;
        } else {
            res.json({message:"Inscription effectuée"});
        }
    })
},


  getRegistered: async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      nickName,
      age,
      // address1,
      // address2,
      // zipCode,
      // city,
      // country,
    } = req.body;

    usersModel.findOne({email}, (err,data) => {
      if (err) {
        console.log(err);
        res.status(404).json({succes: false, message: "Erreur" });
      } else {
        // Renvoi de la data trouvée dans la BDD
        res.json(data);
        console.log(data);
      }
    })

  }
};

module.exports = registerController;
