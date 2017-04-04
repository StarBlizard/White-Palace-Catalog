App.Views.MainBar = Backbone.View.extend({
	
	initialize : function(){
		this.navBar = new App.Views.navBar({
			el : "#navbar-collapse-01"
		});

		this.bGroup = new App.Views.BGroup({
			el : "#head-btn-group" 
		});
	}

});
