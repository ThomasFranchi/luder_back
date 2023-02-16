const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema({
    title : {type: String, required: true, unique: true},
    editor: {type: String, required: true},
    edition : {type: String, required: true},
    releaseDate:  {type: Number, required: true},
    language: {type: String, required: true},
    minPlayers: {type: Number, required: true},
    maxPlayers: {type: Number, required: true},
    minRecommendedAge : Number,
    averageDuration :{type: Number, required: true}, // in minutes
});

module.exports = mongoose.model("Game", gamesSchema);

// TODO ---
// Likes on game or note from 1 to 5.
