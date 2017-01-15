(function(){

  var $pPhoto   = $('#profile-photo');
  var $regis    = $('#regis');
  var $access   = $('#access');
  var $logout   = $('#logout');
  var $userbar  = $('#user-bar');
  var $pUpdate  = $('#product-update');
  var $userShN  = $('#user-show-name');

  console.log("run check");
  $.ajax({
    url     : '/',
    method  : 'POST',
    success : function(data, status, xhr){
      if(data){
        console.log($pPhoto, data);
        $regis.css('display', 'none');
        $access.css('display', 'none');
        $userbar.css('display', 'block');
        $logout.css('display', 'block');
        $pUpdate.css('display', 'block');
        $pPhoto.attr('src', data["Set-Cookie"].img);
	$userShN.html(data["Set-Cookie"].name);
      }
    }
  })
})();
