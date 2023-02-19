const usersModel = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginController = {
  // New method for registering user
  postLogin: async (req, res) => {
    const { email, password } = req.body;

    // Check if input required input are filled
    if (typeof email !== "string" || typeof password !== "string") {
      console.log("422 manque champs");
      res
        .status(422)
        .json({
          message: "l'un ou plusieurs champs obligatoire(s) est/sont vide(s)",
        });
      return;
    }

    // POSTlogin info to compare to DB
    usersModel.findOne({ email: email }, async (err, data) => {

      
      // compare password
      
      const match = await bcrypt.compare(password, data.password);

      if (match === false ) {
       res.json({
          success: false,
          message: "Email ou mot de passe incorrect",
        });
        return;
      } else {
        // Generate Json Web Token
        const token = jwt.sign(
          {
            userId: data._id,
          },
          "secretmessagetrestressecret",
          { expiresIn: "24h" }
        );
        res.json({
          success: true,
          message: "Vous êtes connecté !",
          token: token
        });

      }
      if (err) {
        // console.log(Object.keys(err.keyPattern)[0])
        res
          .status(422)
          .json({ message: "Votre tentative de connexion a échoué." });
        return;
      } else {
        //return;
      }
    });
  },
};

module.exports = loginController;
