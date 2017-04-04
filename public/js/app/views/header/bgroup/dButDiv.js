App.Views.DButDiv = Backbone.View.extend({

	initialize : function(){
		var that = this;
		this.categs = $(".categ").map(function(i,e){
			return e.onclick = function(){
				that.load(e.name);
			};
		});
		
	},

	load : function(categ){
		new App.Views.Products({
			el      : "#products-container",
			options : {
				category : categ,
				search   : undefined
			}
		});
	}

});
