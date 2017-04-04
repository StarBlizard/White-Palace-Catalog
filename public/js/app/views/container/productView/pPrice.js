App.Views.pPrice = Backbone.View.extend({
	events : {},

	tagName : 'div',
	className : 'product-cost',

	initialize : function(){
		this.render();
	},

	render : function(){
		this.$el.append("<strong>Precio: </strong>" + this.model.attributes.price);
	}
});
