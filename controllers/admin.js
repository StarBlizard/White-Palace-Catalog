'use strict';

var path = require('path');

let User = require('../model/user');

/*
* Show a user
*/
module.exports.show = function(req, res){

  //User.fetchAll().then(function(){
    //console.log(arguments);
  //});

  res.sendFile(path.join(__dirname, '../views', 'admin.html'));
};

module.exports.foo = function(req, res){
  console.log('Body: ', req.body);
  return res.status(200).json({message : 'Working on it'});
};
