var GlobalView = Backbone.View.extend({
	el: window,
	events : function(){
		var that = this;
		return {
			"scrollMaxDown" : that.load 
		}
	},
	load   : function(){
		app.controllers.loadProducts.apply(app.utilities.products.counter, app.utilities.products.search, app.utilities.category);
	}
});


app.views.globalView = new GlobalView();
