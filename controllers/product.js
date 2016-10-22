var fs = require('fs');
var Product = require('../model/products.js').product;
var Busboy = require('busboy');

module.exports.upload = function(req, res){
  var timestamp = Date.now();
  var busboy = new Busboy({headers: req.headers});
  busboy.on('field', function(key, value){
    console.log(key, value);
  });
  busboy.on('file', function(fieldname, file, filename){
    var stream = fs.createWriteStream('./public/img/products/'+timestamp+'_'+filename);
    file.pipe(stream);
  });
  busboy.on('finish', function(){
    return  res.status(201).send('OK');
  });
  req.pipe(busboy);
};

module.exports.download = function(req, res){
//  fs.createReadStream('./public/img/products/pepito.png').pipe(res);
res.download('./public/img/products/pepito.png');
}
