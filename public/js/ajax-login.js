$(function(){
  var $username = $('#emailAcc');
  var $password = $('#passwordAcc');
  var $login    = $('#js-login');

  var $pPhoto   = $('#profile-photo');
  var $regis    = $('#regis');
  var $access   = $('#access');
  var $logout   = $('#logout');
  var $userbar  = $('#user-bar');
  var $pUpdate  = $('#product-update');

  $login.click(function(){
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
      }
    }
  });
});

});
