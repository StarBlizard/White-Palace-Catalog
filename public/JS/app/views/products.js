App.Views.Products = Backbone.View.extend({

  events : {
    'click .js-next' : 'next',
    'click .js-prev' : 'prev',
  },

  initialize : function(){
    this.collection = new App.Collections.Products();

    this.collection.on('add', this.render, this);
    this.collection.fetch(); // Ajax a /products
  },

  render : function(model){

    let product = new App.Views.Product({
      model : model
    });

    this.$el.append(product.el); // <p class="red product pepe"> {name} </p>
  },

  prev : function(){
    this.collection.prev();
  },

  next : function(){
    this.collection.next();
  },

});
