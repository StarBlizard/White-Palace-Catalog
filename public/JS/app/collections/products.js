App.Collections.Products = Backbone.Collection.extend({
  //model : App.Models.Product,

  initialize : function(){
	console.log("he");
	this.url = "/load-products/";
  },

});
