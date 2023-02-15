// Import mongoose
const mongoose = require('mongoose');

const DB_URI = "mongodb://127.0.0.1:27017/luderDB";

mongoose.connect(DB_URI).then(() => {
  console.log("Connected to the DataBase LuderDB");
});