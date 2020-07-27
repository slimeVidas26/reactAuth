const passport = require('passport')
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const AmazonStrategy = require('passport-amazon').Strategy;


const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("./keys");
const chalk = require('chalk')
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;



// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // deserialize the cookieUserId to user in the database
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => {
        done(null, user);
      })
      .catch(e => {
        done(new Error("Failed to deserialize an user"));
      });
  });

//jwt startegy
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  
//FACEBOOK STRATEGY
passport.use(
  new FacebookStrategy({
      // options for facebook strategy
      clientID: keys.FACEBOOK.clientID,
      clientSecret: keys.FACEBOOK.clientSecret,
      callbackURL: '/auth/facebook/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    console.log(chalk.green(JSON.stringify(profile)));

      // check if user already exists in our own db
      User.findOne({facebookId: profile.id}).then((currentUser) => {
          if(currentUser){
              // already have this user
              console.log('Facebook user already exists : ', chalk.red(JSON.stringify(currentUser)));
              done(null, currentUser);
          } else {
              // if not, create user in our db
              new User({
                  facebookId: profile.id,
                  displayName: profile.displayName,
                  name: profile.displayName,
                  thumbnail: profile._json.picture,
                  provider :profile.provider,
                  location : profile._json.locale
              }).save().then((newUser) => {
                  console.log('created new facebook user: ', chalk.green(JSON.stringify(newUser)));

                  done(null, newUser);
              });
          }
      });
  })
);

  //GOOGLE STRATEGY
    passport.use(
      new GoogleStrategy({
          // options for google strategy
          clientID: keys.GOOGLE.clientID,
          clientSecret: keys.GOOGLE.clientSecret,
          callbackURL: '/auth/google/redirect'
      }, (accessToken, refreshToken, profile, done) => {
          // check if user already exists in our own db
          User.findOne({googleId: profile.id}).then((currentUser) => {
              if(currentUser){
                  // already have this user
                  console.log('Google user already exists : ', chalk.red(JSON.stringify(currentUser)));
                  done(null, currentUser);
              } else {
                  // if not, create user in our db
                  console.log("profile" , JSON.stringify(profile))

                  new User({
                      username: profile._json.name,
                      name: profile._json.name,
                      googleId: profile.id,
                      thumbnail: profile._json.picture,
                      provider :profile.provider,
                      location : profile._json.locale

                      
                  }).save().then((newUser) => {

                      console.log('created new google user: ', chalk.green(JSON.stringify(newUser)));

                      done(null, newUser);
                  });
              }
          });
      })
  );

//AMAZON STARTEGY
    passport.use(
      new AmazonStrategy({
          // options for amazon strategy
          clientID: keys.AMAZON.clientID,
          clientSecret: keys.AMAZON.clientSecret,
          callbackURL: '/auth/amazon/redirect'
      }, (accessToken, refreshToken, profile, done) => {
        console.log(chalk.green(JSON.stringify(profile)));
    
          // check if user already exists in our own db
          User.findOne({amazonId: profile.id}).then((currentUser) => {
              if(currentUser){
                  // already have this user
                  console.log('Amazon user already exists : ', chalk.red(JSON.stringify(currentUser)));
                  done(null, currentUser);
              } else {
                  // if not, create user in our db
                  new User({
                      amazonId: profile.id,
                      displayName: profile.displayName,
                      name : profile._json.name,
                      email : profile._json.email,
                      thumbnail: profile._json.picture,
                      provider :profile.provider,
                      location : profile._json.locale
                  }).save().then((newUser) => {
                      console.log('created new amazon user: ', chalk.green(JSON.stringify(newUser)));
    
                      done(null, newUser);
                  });
              }
          });
      })
    );

//GITHUB STRATEGY
     passport.use(
      new GithubStrategy({
          // options for github strategy
          clientID: keys.GITHUB.clientID,
          clientSecret: keys.GITHUB.clientSecret,
          callbackURL: '/auth/github/redirect'
      }, (accessToken, refreshToken, profile, done) => {
        console.log(chalk.green(JSON.stringify(profile)));
    
          // check if user already exists in our own db
          User.findOne({githubId: profile.id}).then((currentUser) => {
              if(currentUser){
                  // already have this user
                  console.log('Github user already exists : ', chalk.red(JSON.stringify(currentUser)));
                  done(null, currentUser);
              } else {
                  // if not, create user in our db
                  new User({
                      githubId: profile.githubId,
                      displayName: profile.displayName,
                      userName : profile.userName,
                      name : profile.name,
                      email : profile.email,
                      thumbnail: profile.thunbnail,
                      provider :profile.provider,
                      // location : profile._json.locale
                  }).save().then((newUser) => {
                      console.log('created new github user: ', chalk.green(JSON.stringify(newUser)));
    
                      done(null, newUser);
                  });
              }
          });
      })
    );

        //instagram strategy
  passport.use(new InstagramStrategy({
    clientID : keys.INSTAGRAM.clientID,
    clientSecret : keys.INSTAGRAM.clientSecret,
    callbackURL : "/auth/instagram/redirect"
    } , 
    (accessToken , verifyToken , profile , done)=>{
      console.log(chalk.red(JSON.stringify(profile)));
      user = {...profile}
      return done(null , profile)
    }
    ));

//SPOTIFY STARTEGY
  passport.use(
    new SpotifyStrategy({
        // options for spotify strategy
        clientID: keys.SPOTIFY.clientID,
        clientSecret: keys.SPOTIFY.clientSecret,
        callbackURL: '/auth/spotify/redirect'
    }, (accessToken, refreshToken, profile, done) => {
      console.log(chalk.green(JSON.stringify(profile)));
  
        // check if user already exists in our own db
        User.findOne({spotifyId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('Spotify user already exists : ', chalk.red(JSON.stringify(currentUser)));
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    spotifyId: profile.spotifyId,
                    name : profile.displayName,
                    displayName: profile.displayName,
                    userName : profile.userName,
                    thumbnail: profile.photos[0],
                    provider :profile.provider,
                    country : profile._json.locale
                }).save().then((newUser) => {
                    console.log('created new spotify user: ', chalk.green(JSON.stringify(newUser)));
  
                    done(null, newUser);
                });
            }
        });
    })
  );

//TWITTER STRATEGY
    passport.use(
      new TwitterStrategy({
          // options for TWITTER strategy
          consumerKey: keys.TWITTER.CONSUMER_KEY,
          consumerSecret: keys.TWITTER.CONSUMER_SECRET,
          callbackURL: '/auth/twitter/redirect'
      }, (accessToken, refreshToken, profile, done) => {
        console.log(chalk.green(JSON.stringify(profile)));
    
          // check if user already exists in our own db
          User.findOne({twitterId: profile.id}).then((currentUser) => {
              if(currentUser){
                  // already have this user
                  console.log('Twitter user already exists : ', chalk.red(JSON.stringify(currentUser)));
                  done(null, currentUser);
              } else {
                  // if not, create user in our db
                  new User({
                    twitterId: profile._json.id_str,
                    name: profile._json.name,
                    screenName: profile._json.screen_name,
                    thumbnail: profile._json.profile_image_url
                  }).save().then((newUser) => {
                      console.log('created new twitter user: ', chalk.green(JSON.stringify(newUser)));
    
                      done(null, newUser);
                  });
              }
          });
      })
    );

    //TWITTER STRATEGY
    passport.use(
      new InstagramStrategy({
          // options for TWITTER strategy
          clientID: keys.INSTAGRAM.clientID,
          clientSecret: keys.INSTAGRAM.clientSecret,
          callbackURL: '/auth/instagram/redirect'
      }, (accessToken, refreshToken, profile, done) => {
        console.log(chalk.green(JSON.stringify(profile)));
    
          // check if user already exists in our own db
          User.findOne({instagramId: profile.id}).then((currentUser) => {
              if(currentUser){
                  // already have this user
                  console.log('Instagram user already exists : ', chalk.red(JSON.stringify(currentUser)));
                  done(null, currentUser);
              } else {
                  // if not, create user in our db
                  new User({
                    instagramId: profile._json.id_str,
                    name: profile._json.name,
                    screenName: profile._json.screen_name,
                    thumbnail: profile._json.profile_image_url
                  }).save().then((newUser) => {
                      console.log('created new instagram user: ', chalk.green(JSON.stringify(newUser)));
    
                      done(null, newUser);
                  });
              }
          });
      })
    );

    


module.exports = passport