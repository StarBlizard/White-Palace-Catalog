      "use strict;"
      function register(){
	function validate(email){
		let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if( !expr.test(email)){
        	return false;
	}
      }

        var $username = $('#emailAcc');
        var $password = $('#passwordAcc');
        var $login    = $('#js-login');

        let regData = {
          name       : $("#name").val(),
          email      : $("#email").val(),
          password   : $("#password").val(),
          rep_pass   : $("#rep_pass").val()
        };

	if(!validate(regData.email)){
          if(regData.password === regData.rep_pass){
                $.ajax({
                  method : "POST",
                  url    : "/register",
                  data   : regData,
                  cache  : false,
                  success: function(data, status, xhr) {
  		    console.log("\ndata: ", data, "\nstatus: ", status, "\nxhr: ", xhr)
		    location.href = '/';

                  },
		  statusCode: {
			  401 : function(){
			    alert("This email is alredy on use");
	                  }
		  }
                })
        }else{
          console.log('Fallo en la confirmacion de la contraseÃ±a: ', regData.password + " != " + regData.rep_pass);
          alert("La contraseña no coincide");
        }
 	}else{
	  console.log('Correo invalido');
	  alert('Correo invalido')
	}
      }
