var passport = require('../services/passport').passport;
var local    = require('../strategies/local');
var deserial = require('../services/passport').deserialize;

function isEmptyJSON(obj){          //Detects if the session object is empty
  for(var i in obj){return false;}
  return true;
}

module.exports.register = function(req, res){
          var User  = require('../model/user.js').user;
          var data  = req.body;
	  var exist = false;
	  User.forge({ email : data.email }).fetch().then(function(model){

	   if(model){ 
	     res.status(401).send("This email is alredy on use");
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
             }).save().then(function(){
              req.logIn(this.attributes, function(err){
              if(err){
	  	console.log("error: ", err)
	        res.status(false).send("error");
	      }	

	      deserial(req.body, function(err){
		  if(err){
		  	console.log(err);
		  }
	        console.log("deserealized");
	        return res.status(200).send({"Set-Cookie" :{
		      "name"     : req.body.name,
		      "id"       : req.body.id,
		      "img_path" : req.body.img_path			
		} })
		})

	    })
              res.status(true).send("registred an logged, refresh the page");
            })

	   }	  
          })

          
};


module.exports.login = function (req, res){
  return res.send({"Set-Cookie": req._passport.session.user});
}

module.exports.check = function (req, res) {
  if (!isEmptyJSON(req._passport.session)) {
    return res.status(true).send({ "Set-Cookie" : req._passport.session.user });
  }
  return res.status(false).send(false);
}

module.exports.logout = function (req, res) {
  passport.authenticate('local', { session: false });
  req.logout();
  return res.send(true);
}
