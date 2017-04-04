App.Views.Products = Backbone.View.extend({

  events : {
	  "scroll" : "scrolling"
  },

  url    : function(category){
  	return "/load-products/" + category;
  },

  search : {
  	category : undefined,
	search   : undefined,
	counter  : 0
  },

  initialize : function(init){
    var that = this;

    if(this.collection){ this.collection.reset(); }
    
    $(window).on("scrollMaxDown", function(){
    	that.load(that.search);
    });

    this.collection = new App.Collections.Products();
    this.collection.on('add', this.render, this);
    
    this.load(init.options);
  },

  render : function(model){
	
    let $a      = $('<a></a>'); 
    let product = new App.Views.Product({
      model : model
    });

    $a.append(product.$el);
    this.$el.append($a);
    this.$el.append("<hr>");
    this.search.counter++;
  },

  load : _.throttle(function(options){
	    if(options){
	      if(options.search != this.search.search || options.category != this.search.category) {
		this.collection.reset();
		this.$el.html("");
		this.search.search   = options.search;
		this.search.category = options.category;
		this.search.counter  = 0;
		
	      }
	    }
	    
	    if(this.search.counter % 10 == 0){
      		this.collection.fetch({data: options}); // Ajax a /products
    		}
 },500),

  scrolling : function(){
	var altura = this.el.scrollHeight;
	if(this.$el.scrollTop() + this.$el.height() > altura){
		this.load(this.search);
	}
  }
});
