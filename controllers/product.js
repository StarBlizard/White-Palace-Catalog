var Product = require('../model/products.js').product;
var productId;

module.exports.update = function(req, res){
  console.log(req.body);
  /* Here runs a function which decodes the img and save it in './img/products/' with an name
  new Product({
    tableName   : 'products',
    product     : req.name,
    price       : req.price,
    description : req.description,
    img_path    : req.body.img,     //here goes the img saved route
    category    : false
  }).save().then(function(){
    res.send('OK');
  })
  */
  res.send('Working on it');
};
