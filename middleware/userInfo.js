const jwt = require("jsonwebtoken");
const usersModel = require("../models/usersModel");

function userInfo(req, res, next) {
    //get the token from header 
   if (req.method !== "OPTIONS") { 
  
    const token = String(req.get("Authorization")).split(" ")[1];
    console.log(req.get("Authorization"))
    console.log("CONSOLE.LOG", token)
    console.log("TYPE", req.method)

    //Checking if token is valid
    const decodedToken = jwt.verify(token, 'secretmessagetrestressecret');
  
    //get userId from token, if token is valid
    const userId = decodedToken.userId;
  
    //get user info from DB with the_id key
    const user = usersModel.findOne({ _id: userId });
  
    //Send back the user info to the front via Json
    res.json({ user: user });
};
    
    next();

  }

  module.exports = userInfo;
