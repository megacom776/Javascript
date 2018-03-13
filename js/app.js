		var numero1;
		var numero2;
		var operacion;
        var segundoIgual=false;


		var display = document.getElementById("display")
		var on = document.getElementById("on")
		var signo = document.getElementById("sign")
		var raiz = document.getElementById("raiz")
		var dividido = document.getElementById("dividido")
		var por = document.getElementById("por")
		var menos = document.getElementById("menos")
		var punto = document.getElementById("punto")
		var igual = document.getElementById("igual")
		var mas = document.getElementById("mas")
		var cero = document.getElementById("0")
		var uno = document.getElementById("1")
		var dos = document.getElementById("2")
		var tres = document.getElementById("3")
		var cuatro = document.getElementById("4")
		var cinco = document.getElementById("5")
		var seis = document.getElementById("6")
		var siete = document.getElementById("7")
		var ocho = document.getElementById("8")
		var nueve = document.getElementById("9")

		cero.addEventListener("click",function(){
            self.numero("0")
        })
        cero.addEventListener("mousedown", function(){
            cero.setAttribute("style","transform:scale(0.95,0.95)")
        })
        cero.addEventListener("mouseout", function(){
            cero.setAttribute("style","transform:scale(1,1)")
        })
        uno.addEventListener("click",function(){
            self.numero("0")
        })
        uno.addEventListener("mousedown", function(){
            uno.setAttribute("style","transform:scale(0.95,0.95)")
        })
        uno.addEventListener("mouseout", function(){
            uno.setAttribute("style","transform:scale(1,1)")
        })
        dos.addEventListener("click",function(){
            self.numero("0")
        })
        dos.addEventListener("mousedown", function(){
            dos.setAttribute("style","transform:scale(0.95,0.95)")
        })
        dos.addEventListener("mouseout", function(){
           dos.setAttribute("style","transform:scale(1,1)")
        })
        tres.addEventListener("click",function(){
            self.numero("0")
        })
        tres.addEventListener("mousedown", function(){
            tres.setAttribute("style","transform:scale(0.95,0.95)")
        })
        tres.addEventListener("mouseout", function(){
            tres.setAttribute("style","transform:scale(1,1)")
        })
        cuatro.addEventListener("click",function(){
            self.numero("0")
        })
        cuatro.addEventListener("mousedown", function(){
            cuatro.setAttribute("style","transform:scale(0.95,0.95)")
        })
        cuatro.addEventListener("mouseout", function(){
            cuatro.setAttribute("style","transform:scale(1,1)")
        })
        cinco.addEventListener("click",function(){
            self.numero("0")
        })
        cinco.addEventListener("mousedown", function(){
            cinco.setAttribute("style","transform:scale(0.95,0.95)")
        })
        cinco.addEventListener("mouseout", function(){
            cinco.setAttribute("style","transform:scale(1,1)")
        })
        seis.addEventListener("click",function(){
            self.numero("0")
        })
        seis.addEventListener("mousedown", function(){
            seis.setAttribute("style","transform:scale(0.95,0.95)")
        })
        seis.addEventListener("mouseout", function(){
            seis.setAttribute("style","transform:scale(1,1)")
        })
        siete.addEventListener("click",function(){
            self.numero("0")
        })
        siete.addEventListener("mousedown", function(){
            siete.setAttribute("style","transform:scale(0.95,0.95)")
        })
        siete.addEventListener("mouseout", function(){
            siete.setAttribute("style","transform:scale(1,1)")
        })
        ocho.addEventListener("click",function(){
            self.numero("0")
        })
        ocho.addEventListener("mousedown", function(){
            ocho.setAttribute("style","transform:scale(0.95,0.95)")
        })
        ocho.addEventListener("mouseout", function(){
            ocho.setAttribute("style","transform:scale(1,1)")
        })
        nueve.addEventListener("click",function(){
            self.numero("0")
        })
        nueve.addEventListener("mousedown", function(){
            nueve.setAttribute("style","transform:scale(0.95,0.95)")
        })
        nueve.addEventListener("mouseout", function(){
            nueve.setAttribute("style","transform:scale(1,1)")
        })
        on.addEventListener("click",function(){
            self.numero("0")
        })
        on.addEventListener("mousedown", function(){
            on.setAttribute("style","transform:scale(0.95,0.95)")
        })
        on.addEventListener("mouseout", function(){
            on.setAttribute("style","transform:scale(1,1)")
        })
        signo.addEventListener("click",function(){
            self.numero("0")
        })
        signo.addEventListener("mousedown", function(){
            signo.setAttribute("style","transform:scale(0.95,0.95)")
        })
        signo.addEventListener("mouseout", function(){
            signo.setAttribute("style","transform:scale(1,1)")
        })
        raiz.addEventListener("click",function(){
            self.numero("0")
        })
        raiz.addEventListener("mousedown", function(){
            raiz.setAttribute("style","transform:scale(0.95,0.95)")
        })
        raiz.addEventListener("mouseout", function(){
            raiz.setAttribute("style","transform:scale(1,1)")
        })
        dividido.addEventListener("click",function(){
            self.numero("0")
        })
        dividido.addEventListener("mousedown", function(){
            dividido.setAttribute("style","transform:scale(0.95,0.95)")
        })
        dividido.addEventListener("mouseout", function(){
            dividido.setAttribute("style","transform:scale(1,1)")
        })
        por.addEventListener("click",function(){
            self.numero("0")
        })
        por.addEventListener("mousedown", function(){
            por.setAttribute("style","transform:scale(0.95,0.95)")
        })
        por.addEventListener("mouseout", function(){
            por.setAttribute("style","transform:scale(1,1)")
        })
        menos.addEventListener("click",function(){
            self.numero("0")
        })
        menos.addEventListener("mousedown", function(){
            menos.setAttribute("style","transform:scale(0.95,0.95)")
        })
        menos.addEventListener("mouseout", function(){
            menos.setAttribute("style","transform:scale(1,1)")
        })
        punto.addEventListener("click",function(){
            self.numero("0")
        })
        punto.addEventListener("mousedown", function(){
            punto.setAttribute("style","transform:scale(0.95,0.95)")
        })
        punto.addEventListener("mouseout", function(){
            punto.setAttribute("style","transform:scale(1,1)")
        })
        igual.addEventListener("click",function(){
            self.numero("0")
        })
        igual.addEventListener("mousedown", function(){
            igual.setAttribute("style","transform:scale(0.95,0.95)")
        })
        igual.addEventListener("mouseout", function(){
            igual.setAttribute("style","transform:scale(1,1)")
        })
        mas.addEventListener("click",function(){
            self.numero("0")
        })
      	mas.addEventListener("mousedown", function(){
            mas.setAttribute("style","transform:scale(0.95,0.95)")
        })
        mas.addEventListener("mouseout", function(){
            mas.setAttribute("style","transform:scale(1,1)")
        })


		cero.onclick = function(e){
		escribir(0);
		}
		uno.onclick = function(e){
		escribir(1);
		}
		dos.onclick = function(e){
		escribir(2);
		}
		tres.onclick = function(e){
		escribir(3);
		}
		cuatro.onclick = function(e){
		escribir(4);
		}
		cinco.onclick = function(e){
		escribir(5);
		}
		seis.onclick = function(e){
		escribir(6);
		}
		siete.onclick = function(e){
		escribir(7);
		}
		ocho.onclick = function(e){
		escribir(8);
		}
		nueve.onclick = function(e){
		escribir(9);
		}
		punto.onclick = function(e){
        escribir('.');
		}
        signo.onclick = function(e){
        aplicarSigno();
        }
        raiz.onclick = function(e){
        aplicarRaiz();
        }
		on.onclick = function(e){
        blanquear();
        segundoIgual=false;
        }
		mas.onclick = function(e){
		sumar();
		}
		menos.onclick = function(e){
		restar();
		}
		por.onclick = function(e){
		multiplicar();
		}
		dividido.onclick = function(e){
		dividir();
		}
		
        igual.onclick = function(e){
            if(!segundoIgual){              
            numero2 = display.textContent;
            resolver();
            segundoIgual=true;
            }else{
                numero1 = display.textContent;
                resolver()
            }

            if (x=display.textContent){
                var res = x.substring(0,8);
                display.textContent = res;
            }
        }

function escribir(valor_a_escribir){
    if (display.textContent==0) {
    display.textContent='';
    }
    if (display.textContent.length <= 7) {
        if(display.textContent.indexOf(".")==-1){
        display.textContent = display.textContent + valor_a_escribir;
        }else if(valor_a_escribir!="."){
        display.textContent = display.textContent + valor_a_escribir;
        }
    }
}

function aplicarSigno(){
numero1 = parseInt(display.textContent);
numero1=numero1*(-1);
display.textContent = numero1;
}

function aplicarRaiz(){
    numero1 = parseInt(display.textContent);
    numero1 = Math.sqrt(numero1);
    display.textContent = numero1;
}

function limpiarPantalla(){
	if (display.textContent != 0) {
	display.textContent = '';
	}
}

function blanquear(){
	if (display.textContent != 0) {
		display.textContent = 0;
	}
}

function resetear(){
		resultado.textContent = "";
		numero1 = 0;
		numero2 = 0;
		operacion = "";
	}

function sumar(){
	numero1 = display.textContent;
	operacion = "sumar";
	limpiarPantalla();
}

function restar(){
	numero1 = display.textContent;
	operacion = "restar";
	limpiarPantalla();
}

function multiplicar(){
	numero1 = display.textContent;
	operacion = "multiplicar";
	limpiarPantalla();
}

function dividir(){
	numero1 = display.textContent;
	operacion = "dividir";
	limpiarPantalla();
}



function resolver() {
  var resultado= 0;
  switch(operacion){
    case "sumar":
    resultado= parseFloat(numero1)+parseFloat(numero2);
    break;
    case "restar":
    resultado= parseFloat(numero1)-parseFloat(numero2);
    break;
    case "dividir":
    resultado= parseFloat(numero1)/parseFloat(numero2);
    break;
    case "multiplicar":
    resultado= parseFloat(numero1)*parseFloat(numero2);
    break;
  };
  limpiarPantalla()
  escribir(resultado)
}



