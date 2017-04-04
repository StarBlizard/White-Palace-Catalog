App.Views.pImg = Backbone.View.extend({
	events    : {},

	tagName   : 'img',
	className : 'product-img',

	initialize : function(){
		this.render();
	},

	render : function(){
		this.$el.attr("src", this.model.attributes.img_path);	

	}
});
