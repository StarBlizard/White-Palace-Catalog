$(function(){
  var $pPhoto   = $('#profile-photo');
  var $regis    = $('#regis');
  var $access   = $('#access');
  var $logout   = $('#logout');
  var $userbar  = $('#user-bar');
  var $pUpdate  = $('#product-update');

  $logout.click(function(){
    var request = $.ajax({
      url    : '/logout',
      method : 'POST',
      success: function(data) {
        if (data) {
          console.log($regis);
          $regis.css('display', 'block');
          $access.css('display', 'block');
          $userbar.css('display', 'none');
          $logout.css('display', 'none');
          $pUpdate.css('display', 'none');
          $pPhoto.attr('src', '/');
          document.cookie.split(";").forEach(function(c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
          });
        }
      }
    });
  });
});
