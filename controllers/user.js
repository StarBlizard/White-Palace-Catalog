'use strict';

var path = require('path');

let User = require('../model/user');

/*
* Show a user
*/

module.exports.home = function(req, res){
  res.sendFile(path.join(__dirname, '../views', 'home.html'));
};
