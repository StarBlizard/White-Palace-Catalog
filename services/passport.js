module.exports = {
  start : function(){
    this.passport = require('passport');
    this.passport.use(require('../strategies/local')());
    this.passport.use(require('../strategies/facebook')());
    this.passport.serializeUser(this.serialize);
    this.passport.deserializeUser(this.deserialize);
  },

  serialize : function(model, done){
    var serializedUser = {
      name : model.name,
      id   : model.id,
      img  : model.img_path,
      fb   : model.fb_id,
      email: model.email_phone || model.email
    }
    return done(null, serializedUser);
  },

  deserialize : function(user, done){
    return done(null, user);
  }

};
