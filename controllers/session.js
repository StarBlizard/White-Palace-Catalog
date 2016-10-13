var passport = require('../services/passport');
var model;

module.exports.login = function (req, res){
  model = req;
  return res.send(model._passport.session.user);
}

module.exports.check = function (req, res) {
  if (model) {
    console.log('sigues logueado papa');
    return res.status(true).send(model._passport.session.user);
  }
}

module.exports.logout = function (req, res) {
  model.logout();
  return res.send(true)
}
