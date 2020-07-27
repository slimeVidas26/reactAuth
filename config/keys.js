 const DB_USER = 'isaac';
 const DB_PASSWORD = 'trottinette';

  module.exports = {
     mongoURI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0-3or9x.mongodb.net/test?retryWrites=true&w=majority`,
     secretOrKey: "secret",

     SESSION: {
      COOKIE_KEY: "thisappisawesome"
     },

     AMAZON: {
       clientID: "amzn1.application-oa2-client.4c1282d262554962b2cb78702b120395",
       clientSecret : "8cf2f8254ffb82ad1ee0c2118e7cdc20ecf39c2bab6b14753b63ba5fdd450aa5"
     },
    FACEBOOK: {
      clientID: "559684394976566",
      clientSecret : "222882e3bd869a90cf276ba8b5dccbfb"
    },
     GOOGLE: {
       clientID: "707374088332-j3gutvrrr1d4b4cgvkh6j1qph6638r94.apps.googleusercontent.com",
       clientSecret : "6cDXDV2RBJmQp0hk4jNuCxGi"
      }, 
    GITHUB: {
      clientID: "3c92bba2047b8562bfbc",
      clientSecret : "f2616dd407a2f05df878ee46c8d8fb7710d8ce21"
    },
    INSTAGRAM: {
      clientID: "2937713806322337",
      clientSecret : "4158d078ca4caa3a566af7875debd026"
    },
    SPOTIFY: {
      clientID: "5580256952904ff7aa3a7989613b17d6",
      clientSecret : "2e7fcdb804b24dab809604cedcdf8c64"
    },
    TWITTER: {
      CONSUMER_KEY: "KgKqQm9rTy7O8dA2PjoaM4CdR",
      CONSUMER_SECRET: "WfWREmLVZ6knX1tNrSHzmL0vs4IcHXvTDAeHoczab2yoFkTwlY",
      TWITTER_ACCESS_TOKEN: "224236256-dDx7VZhyDQsR1MXgLnkcCZS1Cjs5kIa5sEK3eD13",
      TWITTER_TOKEN_SECRET: "ClXNXKwaTaOL01WomOD9W64FPvQ1UOOQ1381tn612lwFh"
    }
  };


