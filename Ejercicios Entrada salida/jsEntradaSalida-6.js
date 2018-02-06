/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

// buena costumbre = no incializar variables

// mala costumbre , no tabular variables

		var resultado;   
		var numeroUno;
		var numeroDos;

		numeroUno = document.getElementById('numeroUno').value;
		numeroDos = document.getElementById('numeroDos').value;
		numeroUno= parseInt(numeroUno);
		numeroDos= parseInt(numeroDos);
		resultado = numeroUno+numeroDos;
		alert(resultado);
}

