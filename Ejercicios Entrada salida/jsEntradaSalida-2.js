/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//esto es un comentario
	//alert("anda");	
	//toda linea de instruccion  , termina con punto y coma (;)
	var nombre;

/*	
	es en bloque

	alert("nombre");
	alert(nombre)
	nombre = "marcio"
	alert(nombre)

*/	
		nombre = prompt("ingrese su nombre","natalia natalia");
		//var person = prompt("Please enter your name", "Harry Potter");
		alert("su nombre es: " + nombre);

}

