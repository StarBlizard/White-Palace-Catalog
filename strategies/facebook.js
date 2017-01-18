var passport         = require('../services/passport.js');
var local            = require('./local.js');
var FacebookStrategy = require('passport-facebook').Strategy;

var fbuser             = require('../model/fbuser.js').fbuser;
var nconf            = require('nconf');
var configAuth       = nconf.get('facebookAuth');

var _                = require('underscore');

module.exports = function(){
  
  return new FacebookStrategy({
    clientID      : configAuth.clientID,
    clientSecret  : configAuth.clientSecret,
    callbackURL   : configAuth.callbackURL,
    profileFields : ['id', 'emails', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified', 'picture.type(large)']
  },
  
    function(token, refreshToken, profile, done){
      fbuser.forge({ email_phone : profile.emails[0].value }).fetch().then(function(model){

	if(model){                                   // If the user exist in the fbusers table, then loggin inmediately
	  return done(null, model.attributes) 
	}else{                                       // Else, is registred
          var newUser = new fbuser();

          new fbuser({
            fb_id       : profile.id, 
	    name        : profile.name.givenName + ' ' + profile.name.familyName,
            img_path    : profile.photos[0].value,
            email_phone : profile.emails[0].value,
	    last_buy    : new Date(),
	    gender      : profile.gender,
	    premium     : false,
	    token       : token
	  }).save().then(function(){
	    return done(null, this.attributes);
	  })
	}})  
        return done(null, fbuser);  
    })}
