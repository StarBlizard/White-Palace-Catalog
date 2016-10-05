var User = require('../model/user.js').user;

 /*
* Main page
*/

var path = require('path');

module.exports.index = function(req, res){
   res.sendFile(path.join(__dirname, '../views', 'Index.html'));
};

module.exports.register = function(req, res){
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
    res.redirect(300, '/home')
  })

  return res.redirect(300, '/home');
};
