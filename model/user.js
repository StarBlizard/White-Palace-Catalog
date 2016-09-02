'use strict';
let db = require('../services/database').db


var user = db.Model.extend({
  tableName  : 'users',
  name       : "",
  email      : "",
  password   : "",
  last_buy   : new Date(),
  home_num   : 0,
  street     : "",
  suburb     : "",
  phone      : 0,
  age        : 0,
  gender     : '',
  premium    : false,
  img_path   : "../public/img/profile/usuario.jpg"
})

// Export User model
module.exports.user = user
