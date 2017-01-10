

  var $pPhoto   = $('#profile-photo');
  var $regis    = $('#regis');
  var $access   = $('#access');
  var $logout   = $('#logout');
  var $userbar  = $('#user-bar');
  var $pUpdate  = $('#product-update');

(function(){
  console.log("run check");
  $.ajax({
    url     : '/',
    method  : 'POST',
    success : function(data, status, xhr){
      if(data){
        console.log("madre mia");
        $regis.css('display', 'none');
        $access.css('display', 'none');
        $userbar.css('display', 'block');
        $logout.css('display', 'block');
        $pUpdate.css('display', 'block');
        $pPhoto.attr('src', document.cookie.img);
      }
    }
  })
})();
