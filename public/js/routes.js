App.Router = Backbone.Router.extend({
	
	initialize : function(){
		this.home(); // cause the home event is not being called
			     // the home method will run with the initialize
	},

	routes : {
		''      : 'home',
		'/pepe' : 'pepe'
	},

	home : function(){
		this.header    = new App.Views.Header({
			el : "#header"
		})

		this.container = new App.Views.ContainerView({
			el : '#contenedor'
		});

  	},

  	pepe : function(){
  	}

});
