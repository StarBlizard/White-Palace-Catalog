$(function(){

  var xhr         = new XMLHttpRequest();
  var $pName      = $('#pName');
  var $pDesc      = $('#pDesc');
  var $pUpdateBut = $('#p-upload');
  var $pPrice     = $('#pPrice');

  var $pUpdate     = $('#product-update');
  var $pImgElement = $('#p-img-file');
  var $pImgFile;

  $pImgElement.change(function(){
    var reader = new FileReader();

    reader.onload = function(e){
      $pImgFile = e.target.result;
      $('#p-img').attr('src', $pImgFile);
    }

    reader.readAsDataURL(this.files[0])
  })

  $pUpdate.click(function(){
    pUpdateMostrar();
  });

  $pUpdateBut.click(function(){

    var form = new FormData();
    var file = $pImgElement[0].files[0];

    form.append("llave", file);
    form.append('fb', user.fb);
    form.append('price', $pPrice.val());
    form.append('product', $pName.val());
    form.append('description', $pDesc.val());
    form.append('user', user.id);
    

    xhr.open('POST', '/product-update', true);
    xhr.send(form);
  })
  
   xhr.onload = function(e) {
      if(xhr.readyState === 4){
        if(xhr.status === 201){
	  alert("Producto registrado correctamente");
	  location.href = '/';
        }
      } 
    }

});
