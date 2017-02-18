App.Collections.Products = Backbone.Collection.extend({
  model : App.Models.Product,

  initialize : function(){
    this.once('add', this.activate, this)
  },

  activate : function(){
    this.models.at(0).set({ active : true });
  },

  next : function(){
    let index = this.indexOf(this.findWhere({ active : true }));
    this.models.forEach( model =>{ model.set({ active : false }); });
    if(index == this.length - 1){ index = 0; }
    this.at(index).set({active : true});
  },

  prev : function(){
    let index = this.indexOf(this.findWhere({ active : true }));
    this.models.forEach( model =>{ model.set({ active : false }); });
    if(index == 0){ index = this.length - 1; }
    this.at(index).set({active : true});
  }

});
