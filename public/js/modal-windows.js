function accessOcultar(){
  $('#accessLight').css('display', 'none');
  $('#accessFade').css('display', 'none');
}

function accessMostrar() {
  $('#accessLight').css('display', 'block');
  $('#accessFade').css('display', 'block');
}

function regOcultar(){
  $('#regLight').css('display', 'none');
  $('#regFade').css('display', 'none');
}

function regMostrar() {
  $('#regLight').css('display', 'block');
  $('#regFade').css('display', 'block');
}

function productOcultar(){
  $('#productLight').css('display', 'none');
  $('#productFade').css('display', 'none');
}

function productMostrar() {
  $('#productLight').css('display', 'block');
  $('#productFade').css('display', 'block');
}

function pUpdateOcultar(){
  $('#pUpdateLight').css('display', 'none');
  $('#pUpdateFade').css('display', 'none');
}

function pUpdateMostrar() {
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
