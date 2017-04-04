'use strict';
let db = require('../services/database').db


var fbuser = db.Model.extend({
  tableName   : 'fb_users',
  fb_id       : "",
  name        : "",
  email_phone : "",
  img_path    : "",
  last_buy    : new Date(),
  suburb      : "",
  age         : 0,
  gender      : '',
  premium     : false
});

// Export User model
module.exports.fbuser = fbuser
