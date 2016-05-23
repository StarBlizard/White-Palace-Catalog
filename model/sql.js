var configuration = require('../config/configuration');

var knex = require('knex')({
  client: 'mysql',
  connection: configuration.sql
});

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'hogar'
});

module.exports.send = function(req, res){
  console.log('Body: ', req.body);
};
