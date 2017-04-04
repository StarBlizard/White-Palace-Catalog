App.Views.navBar = Backbone.View.extend({
	
	initialize : function(){
		this.right = new App.Views.navRight({
			el : "#navbar-right"
		})
	}

});
