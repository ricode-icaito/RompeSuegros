function desordenar() {
	piezas.sort(function() {return Math.random() - 0.5});
	console.log(piezas);
}
function desmarcarTodas() {
  
//Elimina el borde de todas las casillas (aunque no lo tuviesen)
	for (var i = 0;i <= 8;i ++) {
		document.getElementById("img_" + i).style.border = "solid 2px white";
	}
}

//Esta función se le llama cuando se hace click en una casilla:
function seleccionar(casilla) {
  
//Contabilizo el click sobre una casilla:
	num_click = num_click + 1;
	console.log("Click num: " + num_click);

//Si es el primero click:
	if (num_click == 1) {
    
//Memorizar la casilla donde se ha hecho este primer click:
		casilla_click_primero = casilla;
		desmarcarTodas();
		document.getElementById("img_" + casilla).style.border = "solid 2px red";
		console.log("Memorizo la casilla del primer click: " + casilla_click_primero);
	}

	if (num_click == 2) {
    
//En este caso, este segundo click, no me interesa mantenerlo, con lo cual la variable puede ser local
		var casilla_click_segundo = casilla;

//Pintar en la consola como esta el array antes del intercambio:
		console.log(piezas);

//Intercambiar los valores en las posiciones del array:
		var contenido = piezas[casilla_click_primero];
    
//Ahora ya puedo cambiar el contenido de esa casilla:
		piezas[casilla_click_primero] = 
    piezas[casilla_click_segundo];
    
//Por último, pongo en la casilla del segundo click, el contenido que había en la primera:
		piezas[casilla_click_segundo] = contenido;

//Pintar en la consola como ha quedado el array:
		console.log(piezas);

//Volver a poner el contador de clicks a 0:
		num_click = 0;

//Quitar el borde que estaba marcado:
		desmarcarTodas();

//Aquí deberíamos refrescar el panel:
		refrescarPuzzle();

//Comprobar si el puzzle ya es correcto:
		var correcto = comprobarPuzzleFinalizado();
    
//Al salir del bucle la variable correcto me dice true si esta completo y false si no:
		if (correcto == true) {
      
//Mostramos el alert mediante un breve temporizador, para que de tiempo a refrescar el puzzle y verlo completo:
			setTimeout(function(){
			 	alert("No perdamos nada de nuestro tiempo; quizá los hubo más bellos, pero este es el nuestro..."); 
				alert("Estamos aquí para vivir nuestras vidas tan bien que la muerte tiembla al arrebatárnosla!.");   
			}, 300);
		}
	}
}

function comprobarPuzzleFinalizado() {
  
//Recorrer todo el array piezas y ver el contenido de cada casilla se corresponde con su posición:
	var correcto = true;
	for (var i = 0;i <= 8;i ++) {
		if (piezas[i] != i) {
			correcto = false;
		}
	}
	return correcto;
}			

function refrescarPuzzle() {
	for (var casilla = 0;casilla <= 8;casilla ++) {
    
//Obtengo el número de la imagen que hay en el array en la casilla i:
		var imagen = piezas[casilla];
    
//Pinto en la casilla i, la imagen imagen:
		document.getElementById("img_" + casilla).src = "imagenes/img_" + imagen + ".jpg";
	}
}

//Comienzo el programa:
var piezas = [0,1,2,3,4,5,6,7,8];

//Variable para distinguir si es el primer o segundo click:
var num_click = 0;

//Variable para saber en que casilla se hizo el primer click:
var casilla_click_primero;

//Llamo a la función desordenar:
desordenar();

//LLamo a la función que refresca el panel con el puzzle:
refrescarPuzzle();
desmarcarTodas();