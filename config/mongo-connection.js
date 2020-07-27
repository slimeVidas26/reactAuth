const db = require("./keys").mongoURI;
const mongoose = require("mongoose");


// Connect to MongoDB
const mongoConnect = mongoose.connect(
    db,{ 
        useNewUrlParser: true ,
        useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  module.exports = mongoConnect;