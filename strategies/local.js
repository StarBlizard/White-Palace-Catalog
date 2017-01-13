var LocalStrategy = require('passport-local').Strategy;
var User          = require('../model/user.js').user;
var passport      = require('../services/passport.js');



/*
 * User model
 * */

 module.exports = function(){
   return new LocalStrategy(
     function(email, password, done, newUser){
       console.log("run local, user: ",newUser);
       if(!newUser){
         console.log("email: ", email, "password: ", password);

         User.forge({ email : email }).fetch().then(function(model){
 
           //if(model){ console.log("error: ", email.NotFoundEror ); return done(email.NotFoundEror) }

           if(!model){
             console.log("Incorrect email: ", email);
             return done(null, false, { message: 'Incorrect email' })
           }

           if(model.attributes.password != password){
             console.log("Incorrect password: ", model.attributes.password, "!=", password);
             return done(null, false, { message: 'Incorrect password.' });
           }
           return done(null, model.attributes);
         })
	}else{
	 console.log("new User!!!")
         return done(null, newUser.body);
        }
    });
 }
