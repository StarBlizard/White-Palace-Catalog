module.exports = {
  start : function(){
    this.passport = require('passport');
    this.passport.use(require('../strategies/local')());
    this.passport.serializeUser(this.serialize);
    this.passport.deserializeUser(this.deserialize);
  },

  serialize : function(model, done){
    console.log("run serialize, user:", model);
    var serializedUser = {
      name : model.name,
      id   : model.id,
      img  : model.img_path
    }
    return done(null, serializedUser);
  },

  deserialize : function(user, done){
    console.log("run deserialize");
    return done(null, user);
  }

};
