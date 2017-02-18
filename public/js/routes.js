App.Router = Backbone.Router.extend({

	routes : {
		''      : 'home',
    '/pepe' : 'pepe'
	},

  home : function(){
    this.container = new App.Views.ContainerView({
      el : '#contenedor'
    });
  },

  pepe : function(){
  }

});
