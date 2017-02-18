App.Views.Product = Backbone.View.extend({

  events : {
    'click' : 'alertMe'
  },

  tagName   : 'p',
  className : 'red product pepe'

  initialize : function(){
    this.model.on('change:active', this.activate, this);
    this.render();
  },

  render : function(){
    this.$el.text(this.model.get('name'));
  },

  activate : function(){
    let action = this.model.get('active') ? 'addClass' : 'removeClass';
    this.$el[action]('active');
  },

  alertMe : function(){
    alert(`Hello my name is: ${this.model.get('name')} `);
  }

});
