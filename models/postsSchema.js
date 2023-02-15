// import  mongoose module
const mongoose = require('mongoose');


// Create sub-Schema for Comments
const CommentsSchema = new mongoose.Schema({
author : String,
authorId: ObjectId,
publicationDate : Date,
content: String,
commentLikes : [] // TODO
})

// Create Session Schema
const PostSchema = new mongoose.SChema({
    author: String,
    authorId: ObjectId,
    publicationDate : Date,
    content: String,
    postLikes: [],// TODO
    comment: [CommentsSchema]
});

module.exports = PostSchema;