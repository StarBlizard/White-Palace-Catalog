var passport = require('../services/passport').passport;
var local    = require('../strategies/local');
var deserial = require('../services/passport').deserialize;

function isEmptyJSON(obj){          //Detects if the session object is empty
  for(var i in obj){return false;}
  return true;
}

module.exports.register = function(req, res){
          var User   = require('../model/user.js').user;
          var data   = req.body;
	  var exist  = false;
	  var fbuser = require('../model/fbuser.js').fbuser;
	  User.forge({ email : data.email }).fetch().then(function(model){ // Search in the users table for the given email

	   if(model){                                                      // if the email is registred, returns 401 status 
	     res.status(401).send("This email is alredy on use");
	   }else{

	     fbuser.forge({ email_phone : data.email}).fetch().then(function(model){  // Search in the fbusers table the email
	       if(model){
		 res.status(401).send("This email is alredy on use");      // if the email is registred... 401
	       }else{

	         new User({
                   name       : data.name,
                   email      : data.email,
                   password   : data.password,
                   last_buy   : new Date(),
                   home_num   : data.home_num,
                   street     : data.street,
                   suburb     : data.suburb,
                   phone      : data.phone,
                   age        : data.age,
                   gender     : data.gender,
                   premium    : false,
                   img_path   : "./img/profile/usuario.jpeg"
                 }).save().then(function(){			  	// when the user is registred, the is serialized and deserealized
                   req.logIn(this.attributes, function(err){
                     if(err){ 
	               console.log("error: ", err)
	               res.status(false).send("error");
	             }	

	             deserial(req.body, function(err){
  		       if(err){
		         console.log(err);
		       }
	               return res.status(200).send({"Set-Cookie" :{
		         "name"     : req.body.name,
		         "id"       : req.body.id,
		         "img_path" : req.body.img_path			
		       }})
		    })
	         })
                 res.status(true).send("registred an logged, refresh the page");
               })
	      }})	  
            }})
          
};


module.exports.login = function (req, res){                               // The user is logged and this returns id, name, email and photo
  return res.send({"Set-Cookie": req._passport.session.user});
}

module.exports.check = function (req, res) {                              // This check if the user is logged
  if (!isEmptyJSON(req._passport.session)) {
    return res.status(true).send({ "Set-Cookie" : req._passport.session.user });
  }
  return res.status(false).send(false);
}

module.exports.logout = function (req, res) {                             // Cleans the session erasing req._passport.session
  passport.authenticate('local', { session: false });
  req.logout();
  return res.send(true);
}
