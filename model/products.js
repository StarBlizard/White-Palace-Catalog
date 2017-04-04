'use strict';
let db = require('../services/database').db


var product = db.Model.extend({
  tableName   : 'products',
  product     : "",
  price       : 0,
  description : "",
  img_path    : '',
  user        : 0,
  fb_user     : 0
})

// Export User model
module.exports.product = product
