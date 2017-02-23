var ProductsContainer = Backbone.View.extend({
	el     : '#products-container',
	events : function(){
		var that = this;
		var events = {
			"click"	: this.hello,
		}
		return events;
	},
	hello : function(){
	}
});


app.views.productsContainer = new ProductsContainer();
