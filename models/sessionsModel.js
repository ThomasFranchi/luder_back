const mongoose = require('mongoose');
const postsSchema = require('./postsSchema')

// Create sub-Schema for GPS coordinates of the session game.
const coordsSchema = new mongoose.Schema({
    lat: Number,
    lon: Number,
})

// Create sub-Schema for players who registered to play this session
const PlayersSchema = new mongoose.Schema ({
    nickName:{ type: String, required : true},
    userId : mongoose.Schema.Types.ObjectId,
   
})   

// Create sub-Schema for session OWNER
const OwnerSchema = new mongoose.Schema({
    nickname : {type : String,
    required : true},
    userId : mongoose.Schema.Types.ObjectId,
});

// Create main Session Schema
const SessionSchema = new mongoose.Schema({   
    sessionDate : {
        type : Date,
        default : Date.now
    },
    sessionName: {
        type: String,
        required : true,
    },
    sessionDescription : String, // short description of the session Game, Post and comment are seperated below
    sessionOwner: OwnerSchema,
    availableSpots: Number,
    onLine : Boolean,
    local: Boolean,
    mixed: Boolean,
    physicalLocation : coordsSchema, // GPS coord.
    onlineLocation : String, // which software
    registeredUsers: [PlayersSchema],
    sessionStatus: String, // open, closed, finished.
    likes: [], /// TODO 
    posts: postsSchema // 
});


module.exports = mongoose.model("Session", SessionSchema)