'use strict';

let nconf = require('nconf');
let knex  = require('knex');

// Start mysql connection
module.exports.start = function(){
  console.log('Start Database');
  let connection = knex(nconf.get('database'));
  this.db = require('bookshelf')(connection);
};
