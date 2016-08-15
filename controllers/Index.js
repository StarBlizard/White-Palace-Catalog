var _ = require('underscore');

/*
* Main page
*/

var path = require('path');

module.exports.index = function(req, res){
   res.sendFile(path.join(__dirname, '../views', 'Index.html'));
};

module.exports.register = function(req, res){
  var data = req.body;
  var User =  require('../model/user.js');

  new User({
    first_name : data.first_name,
    last_name  : data.last_name,
    email      : data.email,
    password   : data.password,
    last_buy   : new Date(),
    home_num   : data.home_num,
    street     : data.street,
    suburb     : data.suburb,
    lada       : data.phone.slice(',')[0],
    phoneNum   : data.phone.slice(',')[1],
    age        : data.age,
    gender     : data.gender,
    premium    : false
  }).save().then(console.log("yay!"))


  return res.status(200).json({message : 'Working on it'});
};
