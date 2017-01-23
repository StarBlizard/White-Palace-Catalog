  var pCounter = 0;
  var pCateg   = false;
  var moreProd = true;
  var pSearch  = false;


productLoad(false, false, pCounter);

function productLoad(category, search, counter, searchclick){

  var $pContainer = $('#products-container');

  if(search != pSearch) {
    $pContainer.empty();
    pSearch  = search;
    pCateg   = false;
    pCounter = 0;
  }

  if(category != pCateg){
    $pContainer.empty();
    pCateg   = category;
    pCounter = 0;
    pSearch  = false;
  }

  if(searchclick){
    $pContainer.empty();
  }

  var data = {
    counter  : counter
  }

  if(pCateg) { data.category = pCateg }
  if(pSearch){ data.search   = '%'+ pSearch.replace(' ','%') + '%'
  }

  $.ajax({
    url     : '/pload',
    method  : 'POST',
    data    : data,
    success : function(data, status, xhr){

     
     var loading = true;
     var i;

     for(i = counter; loading ; i++){ 

       if(data.prods[i]){ 
	    
	    $pContainer.append('<a><div id="product'+ i +'" class="product"></div><a>');

     	    $("#product"+i).append('<img id="product-img'+ i +'"class="4img-responsive product-img" src="'+ data.prods[i].img_path +'"/>');

     	    $("#product"+i).append('<div id="product-info'+i+'" class="product-info"></div>');
     
	    $("#product-info"+i).append('<div id="product-name'+i+'"; class="product-name"><strong>'+ data.prods[i].product +'<strong></div>');

	    $("#product-info"+i).append('<div id=";product-cost'+ i +'" class="product-cost"><strong>$'+ data.prods[i].price +'</strong></div>');

	    $("#product-info"+i).append('<div id="description'+i+'" class="description"><strong>Descripcion: </strong>'+ data.prods[i].description +'</div>')

	       $pContainer.append('<hr>');

       }
       if(!data.prods[i+1]){ loading = false }

       moreProd = data.moreProds;
     }
     pCounter = i;
    } 
 });

	
$(window).scroll(function(){
      var altura = $(document).height();

      if($(window).scrollTop() + $(window).height() == altura && moreProd) {
	      if ( pCateg ) { productLoad(pCateg, false, pCounter) 
	      }else{
	        if ( search ) { productLoad(false, searchL, pCounter) }else{
	        productLoad();
	        }
	      }
      }
                
});

}
