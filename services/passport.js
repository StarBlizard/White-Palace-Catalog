module.exports = {
  start : function(){
    this.passport = require('passport');
    this.passport.use(require('../strategies/local')());

    this.passport.serializeUser(this.serialize);
    this.passport.deserializeUser(this.deserialize);
  },

  serialize : function(user, done){
    console.log("run serialize");
    return done(null, user);
  },

  deserialize : function(user, done){
    console.log("run deserialize");
    return done(null, user);
  }

};
