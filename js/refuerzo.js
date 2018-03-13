var display = document.getElementById("display")
var operandoA,
	operandoB,
	operacion

var calculadora = {
	init: function(){
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

		cero.onclick = function(e){
			display.textContent = display.textContent + "0"
		}
		uno.onclick = function(e){
			display.textContent = display.textContent + "1"
		}
		dos.onclick = function(e){
			display.textContent = display.textContent + "2"
		}
		tres.onclick = function(e){
			display.textContent = display.textContent + "3"
		}
		cuatro.onclick = function(e){
			display.textContent = display.textContent + "4"
		}
		cinco.onclick = function(e){
			display.textContent = display.textContent + "5"
		}
		seis.onclick = function(e){
			display.textContent = display.textContent + "6"
		}
		siete.onclick = function(e){
			display.textContent = display.textContent + "7"
		}
		ocho.onclick = function(e){
			display.textContent = display.textContent + "8"
		}
		nueve.onclick = function(e){
			display.textContent = display.textContent + "9"
		}
		punto.onclick = function(e){
			display.textContent = display.textContent + "."
		}

		on.onclick = function(e){
			resetear();
		}
		mas.onclick = function(e){
			operandoA = display.textContent;
			operacion = "+";
			limpiar();
		}
		menos.onclick = function(e){
			operandoA = display.textContent;
			operacion = "-";
			limpiar();
		}
		por.onclick = function(e){
			operandoA = display.textContent;
			operacion = "*";
			limpiar();
		}
		dividido.onclick = function(e){
			operandoA = display.textContent;
			operacion = "÷";
			limpiar();
		}
		raiz.onclick = function(e){
			operandoA = display.textContent;
			operacion = "√";
			limpiar();
		}
		igual.onclick = function(e){
			operandoB = display.textContent;
			resolver();
		}
	}

	function limpiar(){
		resultado.textContent = "";
	}

	function resetear(){
		resultado.textContent = "";
		operandoA = 0;
		operandoB = 0;
		operacion = "";
	}

	function resolver(){
		var res = 0;
		switch (operacion) {
			case "+":
				res = parseFloat(operandoA) + parseFloat(operandoB)
				break;
			case "-":
				res = parseFloat(operandoA) - parseFloat(operandoB)
				break;
			case "*":
				res = parseFloat(operandoA) * parseFloat(operandoB)
				break;
			case "÷":
				res = parseFloat(operandoA) / parseFloat(operandoB)
				break;
			
		}
		resetear();
		resultado.textContent = res;
	}
}

calculadora.init();

/*cero.addEventListener("click",function(){
			self.numero("0")
		})
		cero.addEventListener("mousedown", function(){
			cero.setAttribute("style","transform:scale(0.95,0,95)")
		})
		cero.addEventListener("mouseout", function(){
			cero.setAttribute("style","transform:scale(1,1)")
		})
		uno.addEventListener("click",function(){
			self.numero("1")
		})
		uno.addEventListener("mousedown", function(){
			cero.setAttribute("style","transform:scale(0.95,0,95)")
		})
		uno.addEventListener("mouseout", function(){
			cero.setAttribute("style","transform:scale(1,1)")
		})
		cero.addEventListener("click",function(){
			self.numero("0")
		})
		cero.addEventListener("mousedown", function(){
			cero.setAttribute("style","transform:scale(0.95,0,95)")
		})
		cero.addEventListener("mouseout", function(){
			cero.setAttribute("style","transform:scale(1,1)")
		})










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
var display = document.getElementById('display');

uno.onclick = function(){escribir(1);}
dos.onclick = function(){escribir(2);}
tres.onclick = function(){escribir(3);}
cuatro.onclick = function(){escribir(4);}
cinco.onclick = function(){escribir(5);}
seis.onclick = function(){escribir(6);}
siete.onclick = function(){escribir(7);}
ocho.onclick = function(){escribir(8);}
nueve.onclick = function(){escribir(9);}
punto.onclick = function(){escribir('.');}
on.onclick = function(){limpiarPantalla();}
mas.onclick = function(){sumar();}

function escribir(valor_a_escribir){
	if (display.textContent==0) {
		display.textContent='';
	}
	if (display.textContent.length <= 7) {
		display.textContent = display.textContent + valor_a_escribir;
	}
}

function limpiarPantalla(){
	if (display.textContent != 0) {
		display.textContent = 0;
	}
}

function sumar(){
	numero1 = display.textContent;
	operacion = "sumar";
	limpiarPantalla();
	alert(numero1+operacion);
}

var numero1;
var numero2;
var operacion;

function resolver() {
  var resultado= 0;
  switch(operacion){
    case "sumar":
    resultado= parseFloat(numero1)+parseFloat(numero2);
    break;
    case "restar":
    resultado= parseFloat(numero1)- parseFloat(numero2);
    break;
    case "dividir":
    resultado= parseFloat(numero1)/ parseFloat(numero2);
    break;
    case "multiplicar":
    resultado= parseFloat(numero1)* parseFloat(numero2);
    break;
  };
  resetear();
  mostrarPantalla(resultado)
}











		*/