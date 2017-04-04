function search(){
    if($("#navbarInput-01").val()){
      console.log($("#navbarInput-01").val())
      $.ajax({
        url   : '/search',
        method: 'POST',
	data  : {query : $("#navbarInput-01").val()},
	sucess: function(data, status, xhr){
	  console.log("data", data)
        }
      });
    }
}
