  var counter = 0;
  var moreProd = true;

(function productLoad(){
  var $pContainer = $('#products-container');

  console.log("run pload");

  $.ajax({
    url     : '/pload',
    method  : 'POST',
    data    : {counter: counter},
    success : function(data, status, xhr){

     for(var i = counter; i<counter+10 ; i++){ 

       if(data.prods[i]){ 
	    
	    $pContainer.append('<a><div id="product'+ i +'" class="product"></div><a>');

     	    $("#product"+i).append('<img id="product-img'+ i +'"class="4img-responsive product-img" src="'+ data.prods[i].img_path +'"/>');

     	    $("#product"+i).append('<div id="product-info'+i+'" class="product-info"></div>');
     
	    $("#product-info"+i).append('<div id="product-name'+i+'"; class="product-name"><strong>'+ data.prods[i].product +'<strong></div>');

	    $("#product-info"+i).append('<div id=";product-cost'+ i +'" class="product-cost"><strong>$'+ data.prods[i].price +'</strong></div>');

	    $("#product-info"+i).append('<div id="description'+i+'" class="description"><strong>Descripcion: </strong>'+ data.prods[i].description +'</div>')

	       $pContainer.append('<hr>');

       }

       moreProds = data.moreProds;
     }
     counter += 10;
    } 
  });

	
$(window).scroll(function(){
      var altura = $(document).height();

      if($(window).scrollTop() + $(window).height() == altura && moreProd) {
	      productLoad();
      }
                
});

})();
