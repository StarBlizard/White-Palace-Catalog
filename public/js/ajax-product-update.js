$(function(){
  var xhr = new XMLHttpRequest();

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
    var data = {
      name  : $pName.val(),
      img   : $pImgFile,
      desc  : $pDesc.val(),
      price : $pPrice.val()
    }

    $.ajax({
      url     : '/product-update',
      method  : 'POST',
      data    : data,
      success : function(data, status, xhr){
        pUpdateOcultar();
      }
    });
  })
});
