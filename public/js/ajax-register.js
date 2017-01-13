      "use strict;"
      function register(){

        var $username = $('#emailAcc');
        var $password = $('#passwordAcc');
        var $login    = $('#js-login');

        var $pPhoto   = $('#profile-photo');
        var $regis    = $('#regis');
        var $access   = $('#access');
        var $logout   = $('#logout');
        var $userbar  = $('#user-bar');
        var $pUpdate  = $('#product-update');

        let regData = {
          name       : $("#name").val(),
          email      : $("#email").val(),
          password   : $("#password").val(),
          rep_pass   : $("#rep_pass").val()
        };

        if(regData.password === regData.rep_pass){
              $.ajax({
                type: "POST",
                url: "/register",
                data: regData,
                cache: false,
                success: function(data, status, xhr) {

                  accessOcultar();
                  console.log(data["Set-Cookie"]);
                  document.cookie = data["Set-Cookie"];
                  console.log("cookie", document.cookie);
                  $regis.css('display', 'none');
                  $access.css('display', 'none');
                  $userbar.css('display', 'block');
                  $logout.css('display', 'block');
                  $pUpdate.css('display', 'block');
                  $pPhoto.attr('src', data["Set-Cookie"].img);
                }
              })
        }else{
          console.log('Fallo en la confirmacion de la contraseña: ', regData.password + " != " + regData.rep_pass);
        }
      }
