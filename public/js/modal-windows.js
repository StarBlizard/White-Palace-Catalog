function accessOcultar(){
  $("body").css("overflow", "scroll");
  $('#accessLight').css('display', 'none');
  $('#accessFade').css('display', 'none');
}

function accessMostrar() {
  $("body").css("overflow", "hidden");
  $('#accessLight').css('display', 'block');
  $('#accessFade').css('display', 'block');
}

function regOcultar(){
  $("body").css("overflow", "scroll");
  $('#regLight').css('display', 'none');
  $('#regFade').css('display', 'none');
}

function regMostrar() {
  $("body").css("overflow", "hidden");
  $('#regLight').css('display', 'block');
  $('#regFade').css('display', 'block');
}

function pUpdateOcultar(){
  $("body").css("overflow", "scroll");
  $('#pUpdateLight').css('display', 'none');
  $('#pUpdateFade').css('display', 'none');
}

function pUpdateMostrar() {
  $("body").css("overflow", "hidden"); 
  $('#pUpdateLight').css('display', 'block');
  $('#pUpdateFade').css('display', 'block');
}

$(document).keyup(function(event){
  if(event.which==27){
    accessOcultar();
    regOcultar();
    productOcultar();
    pUpdateOcultar();
  }
});
