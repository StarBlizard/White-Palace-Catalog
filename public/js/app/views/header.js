App.Views.Header = Backbone.View.extend({
	
	initialize : function(){
		this.mainBar = new App.Views.MainBar({
			el : "#main-bar"
		});
	}

})
