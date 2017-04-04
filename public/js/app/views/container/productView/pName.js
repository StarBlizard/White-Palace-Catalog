App.Views.pName = Backbone.View.extend({
	events : {},

	tagName : 'div',
	className : 'product-name',

	initialize : function(){
		this.render();
	},

	render : function(){
		this.$el.append("<strong>Nombre: </strong>" + this.model.attributes.product);
	}
});
