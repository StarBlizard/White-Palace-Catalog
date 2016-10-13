'use strict';
let db = require('../services/database').db


var product = db.Model.extend({
  tableName   : 'products',
  product     : "",
  price       : 0,
  description : "",
  img_path    : '',
  category    : false
})

// Export User model
module.exports.user = product
