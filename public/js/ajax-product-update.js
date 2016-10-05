$(function(){
  var xhr = new XMLHttpRequest();

  var $pName      = $('#pName');
  var $pDesc      = $('#pDesc');
  var $pUpdateBut = $('#p-upload');

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
    var formData = new FormData();
    formData.append('name', $pName.val());
    formData.append('desc', $pDesc.val());
    //formData.append('img', $pImgFile);
    console.log(formData);

    xhr.open('GET', '/product-update', true);
    xhr.responseType = 'text';
    xhr.onload = function(e){
      xhr.send('Que esh eshto?');
      if(this.status == 200){
        console.log('conectado apá', e);
      }
    }
  })
});
