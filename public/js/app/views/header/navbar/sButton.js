App.Views.sButton = Backbone.View.extend({

	events : {
		"click" : "load"
	},

	initialize : function(){
		this.search = new App.Views.Search({
			el : "#navbarInput-01"
		});
	},

	load : function(){
		new App.Views.Products({
			el      : "#products-container",
			options : {
				search : "%" + this.search.$el.val().replace(" ","%") + "%",
				category : undefined
			}
		});
		
	}

});
