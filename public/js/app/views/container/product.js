App.Views.Product = Backbone.View.extend({

  events : {
    //'click' : 'alertMe'
  },

  tagName   : 'div',
  className : 'product',

  initialize : function(){
    //this.model.on('change:active', this.activate, this);
    this.render();
  },

  render : function(){
    let pImgCont = $("<div class='pimg-container'></div>");
    let pImg     = new App.Views.pImg({model : this.model});
    let pInfo    = new App.Views.pInfo({model : this.model}); 

    pImgCont.css({
      "text-align"	: "center",
      "position" 	: "static",
      "display"	        : "inline-block",
      "overflow"	: "hidden",
      "width"           : "200px",
      "height"          : "200px",
      "float"		: "left",
      "margin"		: "0px auto",
    });

    pImgCont.append(pImg.$el);
    this.$el.append(pImgCont);
    this.$el.append(pInfo.$el);
  },

  activate : function(){
    let action = this.model.get('active') ? 'addClass' : 'removeClass';
    this.$el[action]('active');
  },

  alertMe : function(){
    alert(`Hello my name is: ${this.model.get('name')} `);
  }

});
