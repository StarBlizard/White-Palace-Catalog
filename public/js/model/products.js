var Product = Backbone.Model.extend({
	urlRoot : '/load-products/'
});

var Products = Backbone.Collection.extend({
	url        : '/load-products/',
	model      : Product,
	initialize : function(models, options){
	}
});

app.models.products = new Products();
