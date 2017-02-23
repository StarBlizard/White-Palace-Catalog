"use strict";

var fs      = require('fs');
var Busboy  = require('busboy');
var Product = require('../model/products.js').product;
var _       = require('underscore');
var url     = require('url');

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


// To load 10 products to the product model on the front
module.exports.load = function(req, res){
	var body = url.parse(req.url, true).query;
	console.log(body);

	if(!body.category){
    		if(body.search){   // To search products

      			var searchData = {
        			prods     : [],
       				moreProds : false
      			};   

        		Product.query().where('product', 'like', body.search, 'OR','description', 'like', body.search ).then(function(resData){

				console.log(resData);
				for (var i = body.counter ; i<body.counter+10 ; i++){
        				if(resData[i]){
          					searchData.prods[i] = resData[i];
       					}else{
          					i = body.counter + 11; 
  	  					searchData.moreProds = false;
        				}
      				}
				return res.send(searchData.prods);
      			})
    		}else{
	
     			Product.fetchAll().then(function(resData){
        			var data = {
          				prods     : [],
         				moreProds : false
        			};
  
        			for (var i = body.counter ; i<body.counter+10 ; i++){
          				if(resData.models[i]){
            					data.prods[i] = resData.models[i];
          				}else{
            					i = body.counter + 11; 
    	    					data.moreProds = false;
          				}
        			}
        			return res.send(data.prods);
      			});
    		}
	}else{          // To request all category products
    		new Product({category : body.category}).query().where({category : body.category}).then(function(resData){
      			var data = {
        			prods     : [],
        			moreProds : false
      			};
  

      			for (var i = body.counter ; i<body.counter+10 ; i++){
        			if(resData[i]){
          				data.prods[i] = resData[i];
        			}else{
          				i = body.counter + 11; 
  	  				data.moreProds = false;
        			}
      			}

      			return res.send(data.prods);
    			}) 
	}
}
