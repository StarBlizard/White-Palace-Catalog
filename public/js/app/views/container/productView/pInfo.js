App.Views.pInfo = Backbone.View.extend({
	events    : {},

	tagName   : 'div',
	className : 'product-info',

	initialize : function(){
		this.render();
	},

	render	   : function(){
		let pName = new App.Views.pName({model : this.model});
		let pPrice = new App.Views.pPrice({model : this.model});
		let pDesc = new App.Views.pDesc({model : this.model});

		this.$el.append(pName.$el);
		this.$el.append(pPrice.$el);
		this.$el.append(pDesc.$el);

	}
});
