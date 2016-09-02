module.exports = {
  start : function(){
    this.passport = require('passport');
    this.passport.use(require('../strategies/local')());

    this.passport.serializeUser(this.serialize);
    this.passport.deserializeUser(this.deserialize);
  },

  serialize : function(user, done){
    return done(null, user);
  },

  deserialize : function(user, done){
    return done(null, user);
  }

};
