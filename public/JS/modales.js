
function accessOcultar(){
    		document.getElementById("accessLight").style.display='none';
    		document.getElementById("accessFade").style.display='none';
    	}


    	function accessMostrar() {
				document.getElementById('accessLight').style.display='block';
				document.getElementById('accessFade').style.display='block'
       	}


       	function regOcultar(){
    		document.getElementById("regLight").style.display='none';
    		document.getElementById("regFade").style.display='none';
    	}


    	function regMostrar() {
				document.getElementById('regLight').style.display='block';
				document.getElementById('regFade').style.display='block'
       	}


       	function productOcultar(){
    		document.getElementById("productLight").style.display='none';
    		document.getElementById("productFade").style.display='none';
    	}


    	function productMostrar() {
				document.getElementById('productLight').style.display='block';
				document.getElementById('productFade').style.display='block'
       	}


      $(document).keyup(function(event){
        if(event.which==27)
        {
            accessOcultar();
            regOcultar();
            productOcultar();
        }
      });


//Este script permite cargar los elementos con su respectivo contenido

    window.onload = function(){
      var secun = document.getElementById('secun')

      window.addEventListener("keydown", function(e){
        if(e.keyCode==27){
          accessOcultar();
          regOcultar()
        }
      })

      var presCon = {
      }
      var interior= {

      }

      var imgCont={

      }

      var textoInt= {

      }

      var imageInt= {

      }

      var mostrares = {

      }

      var contenidoss = {
        0: "jajajaja",
        1:"huehue?",
        2:"jejejeje",
        3:"ñoñoñoñoño",
        4:"nananananana",
        5:"..........."
      }

      for (var i = 0; i < 5; i++) {  //Aqui se utilizara como limite el numero de elementos con el que responda el servidor
        presCon[i] = document.createElement("div");
        contenidoss[i] = document.createTextNode(contenidoss[i]);
        $(presCon[i]).addClass("presCon");

      //Se añade el div interior con la clase interior
        interior[i] = document.createElement("div");
        $(interior[i]).addClass("interior");

      //se añade el div imagen
        imgCont[i] = document.createElement("div");
        $(imgCont[i]).addClass("imgCont");


      // se añade el div texto
        textoInt[i] = document.createElement("div");
        $(textoInt[i]).addClass("textoInt");



      //se añaden las imagenes... o imagen
        imageInt[i] = document.createElement("img");
        $(imageInt[i]).addClass("imageInt");
        imageInt[i].src ="img/66186003.jpg";

      //se añade la funcion mostrar imagen a los divs

        mostrares[i] = document.createElement("a")
        mostrares[i].href = "#fakelink";

      //se anidan los divs
        secun.appendChild(presCon[i])
          presCon[i].appendChild(interior[i]);
            interior[i].appendChild(imgCont[i]);
              imgCont[i].appendChild(mostrares[i]);
                mostrares[i].appendChild(imageInt[i])
            interior[i].appendChild(contenidoss[i]);

      };

    }
