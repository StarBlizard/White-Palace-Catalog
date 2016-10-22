$(function(){

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
  var xhr = new XMLHttpRequest();
  var form = new FormData();
  var file = $pImgElement[0].files[0];
  form.append("llave", file);
  form.append('price', $pPrice.val());
  form.append('name', $pName.val());
  xhr.open('POST', '/product-update', true);
  xhr.send(form);
  })
});
