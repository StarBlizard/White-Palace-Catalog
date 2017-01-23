"use strict";

var fs = require('fs');
var Busboy = require('busboy');
var Product    = require('../model/products.js').product;
var _ = require('underscore');

/*
Upload files
*/
module.exports.upload = function(req, res){
  var timestamp  = Date.now();
  var busboy     = new Busboy({headers: req.headers});
  var newProduct = {};

  busboy.on('field', function(key, value){ 
    if(key === 'user'){
      if(newProduct.fb){
        newProduct.fbuser = value;
      }else{
        newProduct.user   = value; 
      }
    }else{
      newProduct[key] = value;
    }
  });

  busboy.on('file' , function(fieldname, file, filename){
    var stream = fs.createWriteStream('./public/img/products/'+timestamp+'_'+filename);
    newProduct.img_path = 'img/products/'+timestamp+'_'+filename;
    file.pipe(stream);
  });
  
  busboy.on('finish', function(){
      delete newProduct.fb;
      console.log(Product);
      new Product(newProduct).save().then(function(){
        return  res.status(201).send('OK');
      });
    })
  req.pipe(busboy);
};



// To download images
module.exports.download = function(req, res){
  //  fs.createReadStream('./public/img/products/pepito.png').pipe(res);
  res.download('./public/img/products/pepito.png');
}



// To load 10 products
module.exports.load = function(req, res){
	
  if(!req.body.category){

    if(req.body.search){   // To search products

      var searchData = {
        prods     : [],
        moreProds : false
      };   

         Product.query().where('product', 'like',req.body.search, 'OR','description', 'like', req.body.search ).then(function(resData){
	for (var i = req.body.counter ; i<req.body.counter+10 ; i++){
        if(resData[i]){
          searchData.prods[i] = resData[i];
        }else{
          i = req.body.counter + 11; 
  	  searchData.moreProds = false;
        }
      }
	 return res.send(searchData);
      })
    }else{
	
      Product.fetchAll().then(function(resData){

        var data = {
          prods     : [],
          moreProds : false
        };
   
        for (var i = req.body.counter ; i<req.body.counter+10 ; i++){
          if(resData.models[i]){
            data.prods[i] = resData.models[i];
          }else{
            i = req.body.counter + 11; 
    	    data.moreProds = false;
          }
        }
    
        return res.send(data);
      });
    }
  }else{          // To request all category products
    new Product({category : req.body.category}).query().where({category : req.body.category}).then(function(resData){
      var data = {
        prods     : [],
        moreProds : false
      };
  

      for (var i = req.body.counter ; i<req.body.counter+10 ; i++){
        if(resData[i]){
          data.prods[i] = resData[i];
        }else{
          i = req.body.counter + 11; 
  	  data.moreProds = false;
        }
      }

      return res.send(data);
    }) 
  }
}

