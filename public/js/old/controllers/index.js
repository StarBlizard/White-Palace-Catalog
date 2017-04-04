app.utilities.products = {
	counter : 0,
	search  : false,
	category: false
};


app.controllers.loadProducts = function(counter, search, category){
	var data = {
		counter : counter || app.utilities.products.counter
	}

	if(search != app.utilities.products.search){
		app.views.productsContainer.$el.empty();
		app.utilities.products.search 	= search;
		app.utilities.products.category = false;
		app.utilities.products.counter	= 0;	
	}

	if(category != app.utilities.category){
		app.views.productsContainer.$el.empty();
		app.utilities.products.category = category;
		app.utilities.products.counter	= 0;
		app.utilities.products.search   = false;
	}

	if(app.utilities.products.category){
		data.category = app.utilities.products.category;
	}

	if(search){
		app.utilities.products.search = search;
		data.search = '%'+ search.replace(' ','%') + '%'
	}

	app.models.products.fetch({
		data   : data,
		success: function(a, models){

			var pContainer = app.views.productsContainer.$el;
			var i	       = app.utilities.products.counter;
			var loading    = true;
			
			if(models[i]){
				for(var i; loading ; i++){
					pContainer.append('<a><div id="product'+ i +'" class="product"></div><a>');

	     	   			$("#product"+i).append('<img id="product-img'+ i +'"class="4img-responsive product-img" src="'+ models[i].img_path +'"/>');

					$("#product"+i).append('<div id="product-info'+i+'" class="product-info"></div>');
     
					$("#product-info"+i).append('<div id="product-name'+i+'"; class="product-name"><strong>'+ models[i].product +'<strong></div>');

					$("#product-info"+i).append('<div id=";product-cost'+ i +'" class="product-cost"><strong>$'+ models[i].price +'</strong></div>');

					$("#product-info"+i).append('<div id="description'+i+'" class="description"><strong>Descripcion: </strong>'+ models[i].description +'</div>')

					pContainer.append('<hr>');

					if(!models[i+1]){
						loading = false;
					}
				};
				app.utilities.products.counter = i;
			}
		}
	});
}
