      "use strict;"
      function register(){


        let regData = {
          first_name : $("#first_name").val(),
          last_name  : $("#last_name").val(),
          email      : $("#email").val(),
          password   : $("#password").val(),
          rep_pass   : $("#rep_pass").val(),
          last_buy   : $("#last_buy").val(),
          home_num   : $("#home_num").val(),
          street     : $("#street").val(),
          suburb     : $("#suburb").val(),
          lada       : $("#lada").val(),
          phone      : $("#phone").val(),
          age        : $("#age").val(),
          gender     : $("#gender").val()
        };

        if(regData.password === regData.rep_pass){
              $.ajax({
                type: "POST",
                url: "/register",
                data: regData,
                cache: false,
                success: function(data, status, xhr) {
                  console.log(xhr)
                  console.log(status, "The request has be");
                }
              })
        }else{
          console.log('Fallo en la confirmacion de la contraseña: ', regData.password + " != " + regData.rep_pass);
        }
      }
