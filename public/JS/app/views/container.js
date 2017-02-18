App.Views.ContainerView = Backbone.View.extend({

  initialize : function(){

    this.header = new App.Views.Header({
      el: '.js-header'
    });

    this.products = new App.Views.Products({
      el : '#products-container'
    });

  }

});
