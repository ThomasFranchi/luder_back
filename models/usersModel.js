const mongoose = require("mongoose");

// const adressSchema = new mongoose.Schema({
//   address1: { type: String, required: true },
//   address2: { type: String, required: true },
//   zipCode: { type: String, required: true },
//   city: { type: String, required: true },
//   country: { type: String, required: true },
// });

const gamesSchema = new mongoose.Schema({
    title : { type: String, required: true },
    gameId : {type: mongoose.Schema.Types.ObjectId, required: true }
});


// TODO Séparer 

// const loginSchema = new mongoose.Schema({
//   email: {type: String, require: true,},
//   password: {type: String, require: true},
// });

const UserSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  nickName: {type: String, required: true, unique: true },
  email: {type: String, required: true, unique: true },
  password: {type: String, required: true, select: false },
  age: Number,
  // address: adressSchema,
  gameCollection: [gamesSchema],
  sessionPlayed : Number,
  sessionHosted : Number,
});

module.exports = mongoose.model("User", UserSchema);