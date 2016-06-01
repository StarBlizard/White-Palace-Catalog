'use strict';

let db = require('../services/database').db;

// Export User model
module.exports = db.Model.extend({
  tableName: 'users'
});
