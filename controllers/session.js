var passport = require('../services/passport');

module.exports.login = function (req, res){
  return res.send(req._passport.session.user);
}

module.exports.check = function (req, res) {
  if (req._passport.session) {
    console.log('serialized');
    return res.status(true).send(req._passport.session.user);
  }else {
    return res.status(false);
  }
}

module.exports.logout = function (req, res) {
  req.logout();
  return res.send(true)
}
