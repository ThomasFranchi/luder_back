const jwt = require("jsonwebtoken");
const usersModel = require("../models/usersModel");

async function authCheck(req, res, next) {
    const token = String(req.get("Authorization")).split(" ")[1];

    if(!token) {
        return res.status(401).json({message: "Aucun token"});
    }

    try {
        //Checking if token is valid
        const decodedToken = jwt.verify(token, 'secretmessagetrestressecret');
    
        //get userId from token, if token is valid
        const userId = decodedToken.userId;
    
        //get user info from DB with the_id key
        const user = await usersModel.findById(userId);

        if(!user) {
            throw new Error("User not found");
                }

        req.user = user;

        next();

    } catch(e) {
        console.log(e);
        res.status(401).json({message: "Token invalide"});
    }
}

module.exports = authCheck;
