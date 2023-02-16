// import  mongoose module
const mongoose = require('mongoose');


// Create sub-Schema for Comments
const CommentsSchema = new mongoose.Schema({
commentAuthor : String,
commentAuthorId: mongoose.Schema.Types.ObjectId,
commentPublicationDate : Date,
commentContent: String,
commentCommentLikes : [] // TODO
})

// Create Session Schema
const PostSchema = new mongoose.Schema({
    postAuthor: String,
    postAuthorId: mongoose.Schema.Types.ObjectId,
    postPublicationDate : Date,
    postContent: String,
    postLikes: [],// TODO
    PostComments: [CommentsSchema]
});

module.exports = PostSchema;


