module.exports.send = function(req, res){
var _  = require('underscore')

var config = require("./knexfile.js");
var knex = require('knex')(config);
var bookshelf = require('bookshelf')(knex);

var producto = bookshelf.Model.extend({
  tableName      : 'productos',
  producto       : "",
  precioProducto : 0,
  descripcion    : "",
  departamento   : "",
  categoria      : "",
  imgPath        : "",
  demora         : 0,
  minStock       : 0
});

  console.log('Body: ', _.keys(req.body));

  var tempProduct = new producto({
    tableName      : 'productos',
    producto       : req.body.producto,
    precioProducto : req.body.precio,
    descripcion    : req.body.descripcion,
    minStock       : req.body.minStock,
    departamento   : req.body.departamento,
    categoria      : req.body.categoria,
    demora         : req.body.demora
  })
  tempProduct.save();
};
