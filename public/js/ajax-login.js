function login(){
  var $username = $('#emailAcc');
  var $password = $('#passwordAcc');

  var $pPhoto   = $('#profile-photo');
  var $regis    = $('#regis');
  var $access   = $('#access');
  var $logout   = $('#logout');
  var $userbar  = $('#user-bar');
  var $userShN  = $('#user-show-name');
  var $pUpdate  = $('#product-update');

  var credentials = {
      username : $username.val(),
      password : $password.val()
  };

  var request = $.ajax({
    url    : '/login',
    method : 'POST',
    data   : credentials,
    success: function(data, status, xhr) {
      if (status) {
        accessOcultar();
        console.log(data["Set-Cookie"]);
        document.cookie = data["Set-Cookie"];
        $regis.css('display', 'none');
        $access.css('display', 'none');
        $userbar.css('display', 'block');
        $logout.css('display', 'block');
        $pUpdate.css('display', 'block');
        $pPhoto.attr('src', data["Set-Cookie"].img);
	$userShN.html(data["Set-Cookie"].name);
	user = data["Set-cookie"];
      }
    }
  });
}
