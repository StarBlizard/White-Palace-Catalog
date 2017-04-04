App.Views.ContainerView = Backbone.View.extend({

	initialize : function(){
		this.products = new App.Views.Products({
			el : '#products-container-fix'
		});
		
	  }
});
