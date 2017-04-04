function validateRegData(email, password, rep_pass, name){

	// Validate password
	
	function isPass(pass, rep_pass){
		return (pass && pass === rep_pass);
	}
		
	// Validate email
	function isEmail(email) {
  		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return ( email && regex.test(email) );
	}

	if(!isPass(password, rep_pass)){
		console.log("Las contraseñas no coinciden: ", password, "!=", rep_pass);
		return false;
	}

	if(!isEmail(email)){ 
		console.log(email,"no es un email valido");
		return false;
	}

	if(!name){
		console.log("Escribe un nombre porfavor")
		return false;
	}

	return {
		name     : name,
		email    : email,
		password : password,
		rep_pass : rep_pass
	}

}

// Register Modal Window

var RegLight = Backbone.Model.extend({
	name     : $('#name'),
	password : $('#password'), 
	rep_pass : $('#rep_pass'),
	email    : $('#email'),
	register : function(){
		console.log(this.password.val());

		var regData = validateRegData(this.email.val(), this.password.val(), this.rep_pass.val(), this.name.val());

		if(regData){

                	$.ajax({
                  	method : "POST",
                  	url    : "/register",
                  	data   : regData,
                  	cache  : false,
                  	success: function(data, status, xhr) {
		    		location.href = '/';

                  	},
		  	statusCode: {
				401 : function(){
			    		alert("This email is alredy on use");
	                	}
		  	}
                	});	
		}
	}
});

window.regLight = new RegLight;

