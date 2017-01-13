var local = require('../strategies/local');

function isEmptyJSON(obj){          //Detects if the session object is empty
  for(var i in obj){return false;}
  return true;
}

module.exports.registerComplete = function(req, res){
 return res.send('Exito!!!!');

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
