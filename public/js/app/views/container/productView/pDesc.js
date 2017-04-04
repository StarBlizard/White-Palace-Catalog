App.Views.pDesc = Backbone.View.extend({
	events : {},

	tagName : 'div',
	className : 'description',

	initialize : function(){
		this.render();
	},

	render : function(){
		this.$el.append("<strong>Descripcion: </strong>" + this.model.attributes.description);
	}
});
