var user = {};

(function(){

  var $pPhoto   = $('#profile-photo');
  var $regis    = $('#regis');
  var $access   = $('#access');
  var $logout   = $('#logout');
  var $userbar  = $('#user-bar');
  var $pUpdate  = $('#product-update');
  var $userShN  = $('#user-show-name');
  
  $.ajax({
    url     : '/',
    method  : 'POST',
    success : function(data, status, xhr){
      if(data){
	console.log(data);
        $regis.css('display', 'none');
        $access.css('display', 'none');
        $userbar.css('display', 'block');
        $logout.css('display', 'block');
        $pUpdate.css('display', 'block');
	$userShN.html(data["Set-Cookie"].name);
	$pPhoto.attr('src', data["Set-Cookie"].img);
        user = data["Set-Cookie"];	
      }
    }
  })
})();
