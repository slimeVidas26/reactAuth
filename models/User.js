const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
  provider: {
    type: String,
    required: false
  },
  googleId: {
    type: String,
    required: false
  },
  facebookId: {
    type: String,
    required: false
  },
  githubId: {
    type: String,
    required: false
  },
  amazonId: {
    type: String,
    required: false
  },
  spotifyId: {
    type: String,
    required: false
  },
  twitterId: {
    type: String,
    required: false
  },
  instagramId: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  displayName: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: false
  },
  userName: {
    type: String,
    required: false
  },
  screenName: {
    type: String,
    required: false
  },
  
  thumbnail: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = User = mongoose.model("users", UserSchema);