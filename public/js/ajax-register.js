      "use strict;"
      function register(){

        var $username = $('#emailAcc');
        var $password = $('#passwordAcc');
        var $login    = $('#js-login');

        let regData = {
          name       : $("#name").val(),
          email      : $("#email").val(),
          password   : $("#password").val(),
          rep_pass   : $("#rep_pass").val()
        };

        if(regData.password === regData.rep_pass){
              $.ajax({
                method: "POST",
                url: "/register",
                data: regData,
                cache: false,
                success: function(data, status, xhr) {
		  console.log("\ndata: ", data, "\nstatus: ", status, "\nxhr: ", xhr)
		  location.href = location.href;

                }
              })
        }else{
          console.log('Fallo en la confirmacion de la contraseña: ', regData.password + " != " + regData.rep_pass);
        }
      }
