$(function(){
  var $username = $('#username');
  var $password = $('#passwordAcc');
  var $login    = $('.js-login');

  $login.click(function(){
    var credentials = {
      username : $username.val(),
      password : $password.val()
    };

    var request = $.ajax({
      url    : '/login',
      method : 'POST',
      data   : credentials
    });
  });

});
