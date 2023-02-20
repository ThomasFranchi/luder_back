
// allow connection from front-end
function cors(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Origin, X-Requested-With, Accept"
    );

    // Verb option declenche un status 200 pour empecher l'execution de next et ainsi forcé la seconde requete avec le Bon header (option demande )
    if(req.method === "OPTIONS") {
      return res.sendStatus(200);
    }

    next();
  }
  
  module.exports = cors;




