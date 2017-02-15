var Router = Backbone.Router.extend({
	routes : {
		''       	 : 'home',
	}
});

app.router = new Router();


/*
 * Load products
 */

app.router.on('route:home', app.controllers.loadProducts(app.utilities.products.counter));
