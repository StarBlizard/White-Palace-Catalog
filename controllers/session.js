var local = require('../strategies/local');

function isEmptyJSON(obj){          //Detects if the session object is empty
  for(var i in obj){return false;}
  return true;
}

module.exports.register = function(req, res){
  var User = require('../model/user.js').user;
          var data = req.body;

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
            req.login({"mail" : this.attributes.email, "password" : this.attributes.password}, function(err){
              if(err){
		console.log("error: ", err)
	        return res.status(false).send("error");
	      }	
	      res.status(true).send({"Set-Cookie" : { 
		      "name"     : req.body.name,
		      "id"       : req.body.id,
		      "img_path" : req.body.img_path
	      }});
	    });
              res.status(true).send("registred an logged, refresh the page");
            })

};


module.exports.login = function (req, res){
  return res.send({"Set-Cookie": req._passport.session.user});
}

module.exports.check = function (req, res) {
  if (!isEmptyJSON(req._passport.session)) {
    console.log('sigues logueado papa');
    return res.status(true).send({ "Set-Cookie" : req._passport.session.user });
  }
  return res.status(false).send(false);
}

module.exports.logout = function (req, res) {
  passport.authenticate('local', { session: false });
  req.logout();
  return res.send(true);
}
