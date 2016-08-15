'use strict';

let db = require('../services/database').db

var user = db.Model.extend({
  tableName  : 'users',
  first_name : "",
  last_name  : "",
  email      : "",
  password   : "",
  last_buy   : new Date(),
  home_num   : 0,
  street     : "",
  suburb     : "",
  phone      : 0,
  age        : 0,
  gender     : '',
  premium    : false
})

// Export User model
module.exports = user
